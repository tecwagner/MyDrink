import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOrdinaryDrink } from './ordinaryDrinkAction'
 
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Card from '../common/widget/card'
import '../common/template/custom.css'


class Ordinary extends Component {

    componentWillUnmount() {
        this.props.getOrdinaryDrink()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Bebidas Comum' />
                <Content>
                <div className='Cards'>
                    teste
                </div>
                    {/* <ValueBox cols='12 4' color='green' icon='bank' value='R$ 10,00' text='Total de Crédito' />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 10,00' text='Total de Débitos' />
                    <ValueBox cols='12 4' color='blue' icon='money' value='R$ 0,00' text='Valor Consolidado' /> */}

                                     
                </Content>
            </div>
        )
    }

}

const mapStateToProps = state => ( console.log(state.ordinaryDrink, 'drink'), {
    ordinary: state.ordinaryDrink
})

const mapDispachToProps = dispatch => bindActionCreators({
    getOrdinaryDrink
}, dispatch)

export default connect(mapStateToProps, mapDispachToProps) (Ordinary) 