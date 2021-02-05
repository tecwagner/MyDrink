import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCocketeisDrink, getSearch, changeStrDrink } from '../cocketeis/cocketeisAction'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Card from '../common/widget/card'
import '../common/template/custom.css'
import Grid from '../common/layout/grid'
import IconButton from '../common/template/iconButton'


class Cocketeis extends Component {


    componentWillMount() {

        this.props.getCocketeisDrink() && this.props.getSearch()

    }

    render() {

        const { getSearch } = this.props

        return (
            <div>
                {
                    <div className='filter' role='form' >
                        <ContentHeader title='Cocketeis' />

                        <Grid cols='2 4 6' >
                            <input
                                id='strDrink'
                                className='form-control'
                                placeholder='Pesquisar...'
                                onChange={this.props.changeStrDrink}
                                value={this.props.strDrink}

                            ></input>

                        </Grid>

                        <Grid cols='1' >

                            <IconButton
                                style='info'
                                icon='search'
                                className='icon-search'
                                onClick={() => getSearch(this.props.strDrink)}
                            />

                        </Grid >
                    </div>
                }

                <Content >
                    {/* <h1>Teste</h1> */}
                    <div className='Cards'>

                        {(this.props.cocketeis || []).map((itens) =>

                            <div >
                                <Card

                                    strDrink={`${itens.strDrink}`}
                                    strDrinkThumb={`${itens.strDrinkThumb}`}

                                />
                            </div>

                        )}

                    </div>
                </Content>

            </div>


        )
    }

}

const mapStateToProps = state => {
    console.log(state, 'state');
    return {
        //mapear o estado do componente
        cocketeis: state.cocketeis.drinks,
        strDrink: state.cocketeis.strDrink
    
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getCocketeisDrink, getSearch, changeStrDrink
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Cocketeis)
// export default connect(mapStateToProps, {getCocketeisDrink})(Cocketeis)