var firstInput=0
var secondInput=0
var calcType=-1
var result=-1
var lastWasEquals=false
var lastWasOp=false

function clean(){
    lastWasEquals=false
    document.getElementById('display').value=''
}

function decideOperation(type){
    firstInput=parseFloat(document.getElementById('display').value)
    calcType=type
    lastWasEquals=false
    lastWasOp=true
}

function calc(ct, n1, n2){
    if (ct==1){
        return (n1/n2)
    }
    if (ct==2){
        return (n1*n2)
    }
    if (ct==3){
        return (n1-n2)
    }
    if (ct==4){
        return (n1+n2)
    }
}

function equals(){
    if (calcType==-1){
        return
    }
    if(lastWasEquals){
        firstInput=result
        result = calc(calcType,firstInput,secondInput)
        document.getElementById('display').value=result
        return
    }
    secondInput=parseFloat(document.getElementById('display').value)
    result = calc(calcType,firstInput,secondInput)
    document.getElementById('display').value=result
    lastWasEquals=true
    lastWasOp=false
}

function type(val){
    if(lastWasOp){
        lastWasOp=false
        clean()
    }
    if(lastWasEquals){
        lastWasEquals=false
        result=-1
        firstInput=0
        secondInput=0
        calcType=-1
        clean()
    }
    document.getElementById('display').value+=val
}
