function Node(value){
    this.value = value;
    this.next = null;
    this.prev = null;
}

function appendNode(head,value){
    const newNode = new Node(value);
    if(!head){
        return newNode
    }

    let current = head;

    while(current.next!==null){
        current = current.next;
    }
    current.next = newNode;
    newNode.prev = current;
    return head;
}
function printList(head){
    if(!head){
        return null; 
    }

    let result = [];
    let current = head;

    while(current!==null){
        result.push(current.value);
        current= current.next;
    }

    console.log(result.join(" ⇄ "));

}

// reverse a Doubly linked List 

function reverseNaive(head){
    let stack = [];

    let curr = head;
    while(curr!==null){
        stack.push(curr.value);
        curr = curr.next;
    }

    curr = head;
    while(curr!==null){
        curr.value = stack.pop();
        curr = curr.next;
    }

    return head;
}

function reverseEff(head){
    if(!head || head.next == null){
        return head;
    }

    let curr = head;
    let last = null;

    while(curr!==null){
        last = curr.prev;
        curr.prev = curr.next;
        curr.next = last;

        curr = curr.prev;
    }
    return last.prev
}
function deleteAllK(head,key){
    if(!head){
        return null
    }

    let temp = head;
    while(temp!==null){
        if(temp.value === key){
            if(temp === head){
                head = head.next;
            }

            let nextNode = temp.next;
            let prevNode = temp.prev;

            if(nextNode) nextNode.prev = prevNode;
            if(prevNode) prevNode.next = nextNode;

            temp = nextNode;
        }else{
            temp = temp.next;
        }
    }
    return head;
}

function twoSum(head,key){
    let temp1 = head;
    
    let result = [];

    while(temp1!==null){
        let temp2 = temp1.next;
        while(temp2 !==null){
            let temp = [];
            if(temp2.value + temp1.value === key){
                temp.push(temp1.value , temp2.value);
                result.push(temp);
            }
            temp2 = temp2.next;
        }
        temp1 = temp1.next;

    }
    return result;
}

function findTail(head){
    let curr = head;
    while(curr.next !== null){
        curr = curr.next;
    }
    return curr;
}
function twoSumEff(head,key){
    let left = head;
    let right = findTail(head)

    let result = []

    while(left.value < right.value){
        let temp = []
        let sum = (left.value+right.value);
        if( sum === key){
            temp.push(left.value , right.value);
            left = left.next 
            right = right.prev
        }else if (sum < key){
            left = left.next
        }else{
            right = right.prev
        }
        if(temp.length>0){
            result.push(temp)
        }
       
    }

    return result;
}

function removeDuplicates(head){
    let temp = head;
    while(temp!==null && temp.next !==null){
        let nextNode = temp.next;

        while(nextNode!== null && nextNode.value === temp.value){
            nextNode = nextNode.next;
        }

        temp.next = nextNode;
        if(nextNode) nextNode.prev = temp;
        temp = temp.next
    }
    return head;
}


function judge(){
    const head = [1,1,1,2,3,4];
    let DLL = new Node(head[0]);
    for(let i=1;i<head.length;i++){
        appendNode(DLL,head[i]);
    }

    const head2 = [1,2,2,3,3,4,4]

    let DLL2 = new Node(head2[0]);
    for(let i=1;i<head2.length;i++){
        appendNode(DLL2,head2[i])
    }

    removeDuplicates(DLL);
    printList(DLL);

    removeDuplicates(DLL2)
    printList(DLL2);

    // const k = 2

    // printList(DLL);
    
    // reverseNaive(DLL);
//    const newHead =  reverseEff(DLL);
    //const deletedK = deleteAllK(DLL,k);
    //printList(deletedK);

    // console.log(twoSum(DLL,7))
    // 
    
    
    
}
judge()