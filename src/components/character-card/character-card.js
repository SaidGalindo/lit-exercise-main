import { LitElement, html } from 'lit-element'
import styles from "./character-card-styles"


class CharacterCard extends LitElement {
    static get styles() {
        return [styles]
    }

    static get properties() {
        return {
            character: {type: Object},
            favoritos: [],
        }
    }

    constructor() {
        super()
    }

    handleFavoritos() {
        const event = new CustomEvent('handle-favoritos', {
            detail: { item: this.character },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }


    render() {
        return html`
          <div class="character-card">
            <!-- foto -->
            <div class="character-photo" .style=${`background-image: url(${this.character?.image}); 
            `}>
                <button @click=${this.handleFavoritos}>
                    <svg width="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" stroke="${this.character.isFavorite ? 'red' : '#737373'}">
                    <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" 
                    fill=${this.character.isFavorite ? 'red' : 'white'}></path> </svg>
                </button>
            </div>

            <!-- informacion -->
            <div class="card-data">

                <div class="dato">
                    <label class="subtitulo">Name</label>
                    <label class="info">${this.character?.name}</label>
                </div>

                <div class="dato">
                    <label class="subtitulo">Species</label>
                    <label class="info">${this.character?.species}</label>
                </div>

                <div class="dato">
                    <label class="subtitulo">Gender</label>
                    <label class="info">${this.character?.gender}</label>
                </div>

            </div>

 
          </div>
        `
    }
}

customElements.define('character-card', CharacterCard);