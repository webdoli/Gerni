
class Command{

    constructor( editor ) {

        this.type = '';
        this.name = '';
        this.id = -1;
        this.inMemory = false;
        this.updatable = false;
        this.editor = editor;

    }

    fromJSON( json ) {

        this.inMemory = true;
        this.type = json.type;
        this.name = json.name;
        this.id = json.id;
    }

    toJSON() {

        const output = {};
        output.type = this.type;
        output.id = this.id;
        output.name = this.name;
        return output;

    }

}

export { Command }