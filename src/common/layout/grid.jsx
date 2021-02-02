import React, { Component } from 'react'

class Grid extends Component {

    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        
        if (cols[0]) classes +=  ` col-sm-${cols[0]} `
        if (cols[1]) classes +=  ` col-md-${cols[1]} `
        if (cols[2]) classes +=  ` col-lg-${cols[2]} `

        return classes
    }

    render() {

        const gridClasses = this.toCssClasses(this.props.cols || '12')

        return (
            //Recebe GridClasses
            <div className={gridClasses}> 
                {this.props.children}
            </div>
        )
    }

}

export default Grid