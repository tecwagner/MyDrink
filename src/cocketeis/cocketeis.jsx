import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCocketeisDrink } from '../cocketeis/cocketeisAction'
import { getMediaImagen } from '../cocketeis/imagesAction'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Card from '../common/widget/card'
import '../common/template/custom.css'


class Cocketeis extends Component {


    componentWillMount() {

        this.props.getCocketeisDrink()

    }

    render() {  

        return (
            <div>
                <ContentHeader title='Cocketeis' />
                <Content >
                    {/* <h1>Teste</h1> */}
                    <div className='Cards'>                     

                        {this.props.cocketeis.map( (itens) => 
                            
                            <div>
                                <Card
                                    strDrink={`${itens.strDrink}`}
                                    strDrinkThumb={`${itens.strDrinkThumb}`}
                                />
                            </div>                        
                            
                        )} 

                    </div>
                </Content>


            </div >

        )
    }

}

const mapStateToProps = state => (console.log(state, 'state'), {

    //mapear o estado do componente
    cocketeis: state.cocketeis.drinks,
    nameImages: state
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getCocketeisDrink,
    getMediaImagen
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cocketeis)
// export default connect(mapStateToProps, {getCocketeisDrink})(Cocketeis)