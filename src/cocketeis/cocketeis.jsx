import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCocketeisDrink } from '../cocketeis/cocketeisAction'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Card from '../common/widget/card'
import '../common/template/custom.css'


class Cocketeis extends Component {


    // componentWillMount() {

    //     this.props.getCocketeisDrink()

    // }

    render() {

        const listItem = this.props.cocketeis
        // console.log(this.props.cocketeis, 'item')


        // listItem.drinks.map(() => {
        //     // events.strDrink,
        //     // events.strDrinkThumb
        //     // console.log(, 'list')

        // })


        return (
            <div>
                <ContentHeader title='Cocketeis' />
                <Content >
                    {/* <h1>Teste</h1> */}
                    <div className='Cards'>

                        {/* <Card
                        strDrink={`${listItem}`}
                        // strDrink={`${strDrink}`}
                        // strDrinkThumb={`${strDrinkThumb}`}
                        /> */}

                        {console.log(listItem, 'tese')}



                        {/* {listItem.map( itens =>
                            console.log(itens, 'list'),
                            
                            // <Card
                            //     strDrink={`${itens.strDrink}`}
                            //     strDrinkThumb={`${itens.strDrinkThumb}`}
                            // />
                        )}  */}

                    </div>
                </Content>


            </div >

        )
    }

}

const mapStateToProps = state => ( console.log(state, 'state'), {
    cocketeis: state.cocketeis
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getCocketeisDrink
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cocketeis)
// export default connect(mapStateToProps, {getCocketeisDrink})(Cocketeis)