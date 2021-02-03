import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCocketeisDrink } from '../cocketeis/cocketeisAction'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Card from '../common/widget/card'
import '../common/template/custom.css'
import Grid from '../common/layout/grid'
import IconButton from '../common/template/iconButton'


class Cocketeis extends Component {


    componentWillMount() {

        this.props.getCocketeisDrink()

    }

    render() {

        return (
            <div>
                {
                    <div className='filter' role='form' >

                        <ContentHeader title='Cocketeis' />

                        <Grid cols='2 4 6' >
                            <input
                                id='description'
                                className='form-control'
                                placeholder='Pesquisar...'                                
                            // onChange={this.props.changeDescription}
                            // value={this.props.description}
                            // onKeyUp={this.keyHandler} // Metodo de tecla de atalho
                            ></input>
                        </Grid>

                        <Grid cols='1' >

                            <IconButton
                                style='info'
                                icon='search'
                                className='icon-search'
                            // onClick={search}
                            />

                        </Grid >

                    </div>
                }

                <Content >
                    {/* <h1>Teste</h1> */}
                    <div className='Cards'>

                        {this.props.cocketeis.map((itens) =>

                            <div >
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
    cocketeis: state.cocketeis.drinks
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getCocketeisDrink
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cocketeis)
// export default connect(mapStateToProps, {getCocketeisDrink})(Cocketeis)