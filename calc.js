var firstInput=-1.0
var secondInput=-1.0
var calcType=-1
var result=-1.0
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

function equals(){
    secondInput=parseFloat(document.getElementById('display').value)
    if (calcType==1){
        result=firstInput/secondInput
    }
    if (calcType==2){
        result=firstInput*secondInput
    }
    if (calcType==3){
        result=firstInput-secondInput
    }
    if (calcType==4){
        result=firstInput+secondInput
    }
    document.getElementById('display').value=result
    lastWasEquals=true
    lastWasOp=false
    calcType=-1
}

function type(val){
    if(lastWasOp){
        lastWasOp=false
        clean()
    }
    if(lastWasEquals){
        lastWasEquals=false
        if(val != '.'){
            clean()
        }
    }
    document.getElementById('display').value+=val
}
