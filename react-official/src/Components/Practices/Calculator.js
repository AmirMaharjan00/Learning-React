import React, { useState, Component } from 'react'

export default class Calculator extends Component {
    render() {
        return (
            <>
                <Calculator_Elements/>          
            </>
        );
    }
}


class Calculator_Elements extends Component {
    // constructor method
    constructor(){
        super();
        this.value = []
        this.state = {
            clickedValues: {},
            firstNumber: '',
            secondNumber: '',
            result: '',
            operation: '',
            symbolClicked: false,
            pressedEqualsTo: false
        }
    }

    ArithmeticOperation = ( firstNumber, secondNumber, operation ) => {
        switch( operation ) {
            case '+':
                return parseInt(firstNumber) + parseInt(secondNumber);
                break;
            case '-':
                return firstNumber - secondNumber;
                break;
            case 'x':
                return firstNumber * secondNumber;
                break;
            case '/':
                return firstNumber / secondNumber;
                break;
        }
    }

    // handle on click event
    handleOnClick = ( event ) => {
        let cast = event.target.dataset.cast, value = event.target.dataset.value, numberOnly = ''

         // for action click
         if( cast == 'action' ) {
            switch( value ) {
                case '=':
                    this.setState({result: this.ArithmeticOperation( this.state.firstNumber, this.state.secondNumber, this.state.operation ) })
                    this.setState({pressedEqualsTo: true})
                    // this.setState({firstNumber: this.state.result})
                    break;
                case 'reset':
                    this.setState({clickedValues: ''})
                    this.setState({result: ''})
                    this.setState({firstNumber: ''})
                    this.setState({secondNumber: ''})
                    this.setState({operation: ''})
                    this.setState({symbolClicked: false})
                    this.setState({pressedEqualsTo: false})
                    this.value = []
                    return
                    break;
                case 'del':
                    break;
            }
        }

        // detecting numbers only
        if( cast == 'number' ) {
            numberOnly = event.target.dataset.value
        }

        // detecting symbol click
        if( cast == 'symbol' ) {
            this.setState({symbolClicked: true})
            this.setState({operation: event.target.dataset.value});
        }

        // setting first and second number
        if( this.state.symbolClicked ){
            this.setState({secondNumber: this.state.secondNumber += numberOnly })
        } else {
            this.setState({firstNumber: this.state.firstNumber += numberOnly })
        }


        if( this.state.pressedEqualsTo ) {
            if( cast == 'number' ) {
                return
            } else {
                this.setState({secondNumber: ''})
                this.setState({operation: ''})
                this.setState({firstNumber: this.state.result})
                this.setState({secondNumber: this.state.secondNumber += numberOnly})
                this.setState({operation: event.target.dataset.value});
                this.setState({result: this.ArithmeticOperation( this.state.firstNumber, this.state.secondNumber, this.state.operation ) })
            }
        }
        this.value.push(event.target.dataset.value)
        this.setState({clickedValues: this.value})
    }

    // render method
    render() {
        return(
            <>
                <div className='calculator'>
                    <div className='calculator-display'>
                        {Array.from(this.state.clickedValues)}
                        {this.state.result}
                    </div>
                    <div className='calculator-element'>
                        <span className='calculator-item' data-value="7" data-cast="number" onClick={this.handleOnClick}>7</span>
                        <span className='calculator-item' data-value="8" data-cast="number" onClick={this.handleOnClick}>8</span>
                        <span className='calculator-item' data-value="9" data-cast="number" onClick={this.handleOnClick}>9</span>
                        <span className='calculator-item' data-value="del" data-cast="action" onClick={this.handleOnClick}>Del</span>
                        <span className='calculator-item' data-value="4" data-cast="number" onClick={this.handleOnClick}>4</span>
                        <span className='calculator-item' data-value="5" data-cast="number" onClick={this.handleOnClick}>5</span>
                        <span className='calculator-item' data-value="3" data-cast="number" onClick={this.handleOnClick}>3</span>
                        <span className='calculator-item' data-value="+" data-cast="symbol" onClick={this.handleOnClick}>+</span>
                        <span className='calculator-item' data-value="1" data-cast="number" onClick={this.handleOnClick}>1</span>
                        <span className='calculator-item' data-value="2" data-cast="number" onClick={this.handleOnClick}>2</span>
                        <span className='calculator-item' data-value="3" data-cast="number" onClick={this.handleOnClick}>3</span>
                        <span className='calculator-item' data-value="-" data-cast="symbol" onClick={this.handleOnClick}>-</span>
                        <span className='calculator-item' data-value="." data-cast="number" onClick={this.handleOnClick}>.</span>
                        <span className='calculator-item' data-value="0" data-cast="number" onClick={this.handleOnClick}>0</span>
                        <span className='calculator-item' data-value="/" data-cast="symbol" onClick={this.handleOnClick}>/</span>
                        <span className='calculator-item' data-value="x" data-cast="symbol" onClick={this.handleOnClick}>x</span>
                        <div className='calculator-end'>
                            <span className='calculator-end-item' data-value="reset" data-cast="action" onClick={this.handleOnClick}>RESET</span>
                            <span className='calculator-end-item' data-value="=" data-cast="action" onClick={this.handleOnClick}>=</span>
                        </div>
                    </div>
                </div>
            </>    
        );
    }
}