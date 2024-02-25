function sortNumbers() {
    const numbersInput = document.getElementById('numbers');
    const sortingTechnique = document.getElementById('sortingTechnique').value;
    const resultDiv = document.getElementById('result');

    // Get the numbers from the input and convert them to an array
    const numbersArray = numbersInput.value.split(',').map(Number);

    // Check if the input is valid
    if (!numbersArray.every(number => !isNaN(number))) {
        resultDiv.innerHTML = '<p>Please enter valid numbers.</p>';
        return;
    }

    // Choose the sorting technique
    let sortedNumbers;
    switch (sortingTechnique) {
        case 'bubbleSort':
            sortedNumbers = bubbleSort(numbersArray.slice());
            break;
        case 'selectionSort':
            sortedNumbers = selectionSort(numbersArray.slice());
            break;
        case 'insertionSort':
            sortedNumbers = selectionSort(numbersArray.slice());
            break;
        case 'mergeSort':
            sortedNumbers = selectionSort(numbersArray.slice());
            break;

        
        default:
            resultDiv.innerHTML = '<p>Invalid sorting technique selected.</p>';
            return;
    }

    // Display the sorted numbers
    resultDiv.innerHTML = `<p>Sorted numbers using ${sortingTechnique}:</p>
                          <p>${sortedNumbers.join(', ')}</p>`;
}

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}