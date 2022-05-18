class UIElement {
    constructor( dom ) {
        this.dom = dom;
    }

    add() {

        for( let i = 0; i < arguments.length; i++ ) {
            
            const argument = arguments[i];
            
            if( argument instanceof UIElement ) {

                this.dom.appendChild( argument.dom );

            } else {

                console.error( `UIElement: '${argument}' is not an instance of UIElement.` );

            }
        }

        return this;

    }

    remove() {

        for( let i = 0; i < arguments.length; i ++ ) {

            const argument = arguments[ i ];

            if( argument instanceof UIElement ) {

                this.dom.removeChild( argument.dom );
            
            } else {

                console.error( `UIElement: '${argument}' is not an instance of UIElement.`);
            
            }
        
        }

        return this;

    }

    clear() {

        while( this.dom.children.length ) {

            this.dom.removeChild( this.dom.lastChild );

        }

    }

    setId( id ) {

        this.dom.id = id;

    }

    getId() {

        return this.dom.id;

    }

    setClass( name ) {

        this.dom.className = name;
        return this;
    }

    addClass( name ) {

        this.dom.classList.add( name );
        return this;
    }

    removeClass( name ) {

        this.dom.classList.remove( name );
        return this;

    }

    setStyle( style, array ) {

        for( let i = 0; i < array.length; i ++ ) {
            
            this.dom.style[ style ] = array[ i ];
        
        }
    }

    setDisabled( value ) {

        this.dom.disabled = value;
        return this;

    }

    setTextContent( value ) {

        this.dom.textContent = value;
        return this;

    }

    setInnerHTML( value ) {

        this.dom.innerHTML = value;

    }

    getIndexOfChild( element ) {

        return Array.prototype.indexOf.call( this.dom.children, element.dom );

    }

}


//properties

const properties = [ 'position', 'left', 'top', 'right', 'bottom', 'width', 'height', 'border', 'borderLeft',
    'borderTop', 'borderRight', 'borderBottom', 'borderColor', 'display', 'overflow', 'margin', 'marginLeft', 'marginTop', 
    'marginRight', 'marginBottom', 'padding', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'verticalAlign',
    'color', 'background', 'backgroundColor', 'opacity', 'fontSize', 'fontWeight', 'textAlign', 'textDecoration', 'textTransform',
    'cursor', 'zIndex'];

properties.forEach( (property) => {

    const method = 'set' + property.substr( 0, 1).toUpperCase() + property.substr( 1, property.length );

    UIElement.prototype[ method ] = () => {

        this.setStyle( property, arguments );
        return this;

    }

});


//events

const events = [ 'KeyUp', 'KeyDown', 'MouseOver', 'MosueOut', 'Click', 'DblClick', 'Change', 'Input' ];

events.forEach( ( evt ) => {

    const method = 'on' + evt;

    UIElement.prototype[ method ] = function( callback ) {
        
        this.dom.addEventListener( evt.toLowerCase(), callback.bind( this ) );
        return this;

    };

});



// Creating essential UI

class UIP extends UIElement {
    constructor() {
        super( document.createElement( 'p') );
    }
}

class UIDiv extends UIElement {
    constructor() {
        super( document.createElement( 'div' ) );
    }
}


class UISpan extends UIElement {
    constructor() {
        super( document.createElement( 'span' ) );
    }
}

class UIPanel extends UIDiv {
    constructor() {
        super();
        this.dom.className = 'Panel';
    }
}

class UIRow extends UIDiv {
    constructor() {
        super();
        this.dom.className = 'Row';
    }
}

class UIText extends UIElement {
    constructor( text ) {
        super();

        this.dom.className = 'Text';
        this.dom.style.cursor = 'default';
        this.dom.style.display = 'inline-block';

        this.setValue( text );

    }

    getValue() {
        return this.dom.textContent;
    }

    setValue( val ) {
        if( val !== undefined ) {
            this.dom.textContent = val;
        }
        return this;
    }
}


class UIInput extends UIElement {
    constructor( text ) {
        super( document.createElement('input') );

        this.dom.className = 'Input';
        this.dom.style.padding = '2px';
        this.style.border = '1px solid transparent';

        this.dom.setAttribute( 'autocomplete', 'off' );
        this.dom.addEventListener( 'keydown', (e) => {

            e.stopPropagation();

        });

        this.setValue( text );
    }

    getValue() {
        return this.dom.value;
    }

    setValue( val ) {
        this.dom.value = val;
        return this;
    }
}


class UISelect extends UIElement {

	constructor() {

		super( document.createElement( 'select' ) );

		this.dom.className = 'Select';
		this.dom.style.padding = '2px';

		this.dom.setAttribute( 'autocomplete', 'off' );

	}

	setMultiple( boolean ) {

		this.dom.multiple = boolean;

		return this;

	}

	setOptions( options ) {

		const selected = this.dom.value;

		while ( this.dom.children.length > 0 ) {

			this.dom.removeChild( this.dom.firstChild );

		}

		for ( const key in options ) {

			const option = document.createElement( 'option' );
			option.value = key;
			option.innerHTML = options[ key ];
			this.dom.appendChild( option );

		}

		this.dom.value = selected;

		return this;

	}

	getValue() {

		return this.dom.value;

	}

	setValue( value ) {

		value = String( value );

		if ( this.dom.value !== value ) {

			this.dom.value = value;

		}

		return this;

	}

}


class UICheckbox extends UIElement {

	constructor( boolean ) {

		super( document.createElement( 'input' ) );

		this.dom.className = 'Checkbox';
		this.dom.type = 'checkbox';

		this.setValue( boolean );

	}

	getValue() {

		return this.dom.checked;

	}

	setValue( value ) {

		if ( value !== undefined ) {

			this.dom.checked = value;

		}

		return this;

	}

}

class UISection extends UIElement {
    
    constructor() {
        super( document.createElement( 'section') );
    }

}


class UIBreak extends UIElement {

	constructor() {

		super( document.createElement( 'br' ) );

		this.dom.className = 'Break';

	}

}

class UIHorizontalRule extends UIElement {

	constructor() {

		super( document.createElement( 'hr' ) );

		this.dom.className = 'HorizontalRule';

	}

}

class UIButton extends UIElement {

	constructor( value ) {

		super( document.createElement( 'button' ) );

		this.dom.className = 'Button';
		this.dom.textContent = value;

	}

}

class UIOption extends UIElement {
    
    constructor() {

        super( document.createElement( 'option') );
    }

}


class UILabel extends UIElement {
    
    constructor() {

        super( document.createElement( 'label') );
    }

}

class UISmall extends UIElement {
    
    constructor() {

        super( document.createElement( 'small') );
    }

}


class UICanvas extends UIElement {

    constructor() {

        super( document.createElement( 'canvas' ) );

    }

}



export { UIElement, UICanvas, UIP, UIDiv, UIRow, UISection, UISpan, UIPanel, UIText, UIInput, UISelect, UICheckbox, UIBreak, UIHorizontalRule, UIButton, UIOption, UILabel, UISmall }