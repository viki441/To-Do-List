function addElement() {
        const inputElement = document.getElementById('userInput');
        const userInput = inputElement.value.trim();
    
        if (userInput) {
            const listItem = document.createElement('li');
            const remButton = document.createElement('button');
            const doneButton = document.createElement('button');
            //adds elements to here
            const unorderedList = document.getElementById('unorderedList');
            const removedElements = document.getElementById('removedElements');
            const doneTasks = document.getElementById('doneTasks');
            


            listItem.textContent = userInput;
            
            remButton.innerHTML = 'remove';
            remButton.classList.add('remButton');
            
            doneButton.innerHTML = 'done';
            doneButton.classList.add('doneButton');
    
            
    
            function createReturnButton() {
                const returnUp = document.createElement('button');
                returnUp.innerHTML = 'return';
                returnUp.classList.add('returnButton');
                removedElements.classList.add('unaddedElements');
                doneTasks.classList.add('unaddedElements');
                returnUp.addEventListener('click', () => {
                    unorderedList.append(listItem);
                    //when returned:
                    remButton.style.display = 'inline';
                    doneButton.style.display = 'inline';
                    
                    returnUp.remove();
                });
                return returnUp;
            }
    
            remButton.addEventListener('click', () => {
                removedElements.append(listItem);
                remButton.style.display = 'none';
                doneButton.style.display = 'none';
                listItem.append(createReturnButton());
            });
    
            doneButton.addEventListener('click', () => {
                doneTasks.append(listItem);
                remButton.style.display = 'none';
                doneButton.style.display = 'none';
                listItem.append(createReturnButton());
            });
    
            listItem.append(remButton, doneButton);
            unorderedList.append(listItem);
            inputElement.value = '';
        }
    }
    function clearElements() {
        const lists = [
            document.getElementById('unorderedList'),
            document.getElementById('removedElements'),
            document.getElementById('doneTasks')
        ];
    
        lists.forEach(list => {
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
        });
    }
    