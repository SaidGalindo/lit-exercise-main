import { LitElement, html, nothing } from "lit-element";
import styles from './favorite-characters-styles'

export class FavoriteCharacters extends LitElement {
    static styles = [styles];

    static get properties() {
        return {
            favoritos: { type: Array },
        };
    }

    constructor(){
        super()
        this.favoritos = []
    }

    openModal() {
        var modal = this.shadowRoot.getElementById("myModal");
        modal.style.display = "block";
      }
    
      closeModal() {
        var modal = this.shadowRoot.getElementById("myModal");
        modal.style.display = "none";
        // this.requestUpdate();
      }
    


    render() {
        return html`
    
        <button class="button-1" @click=${this.openModal}>Ver favoritos</button>
        
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close" @click=${this.closeModal}>&times;</span>

                <div class="characters-grid">

                ${!Boolean(this.favoritos.length) ? html`<p style="color: gray">La lista de favoritos está vacía...</p>` : 
            html `${this.favoritos?.map((character) => {
                            return html`
                            <character-card .character=${character} >
                    </character-card>`
                    })}`}

                    
                </div>
                
            </div>

        </div>
        
        `;
    }
}
customElements.define('favorite-characters', FavoriteCharacters);
