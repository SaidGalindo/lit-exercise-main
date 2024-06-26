import { LitElement, html } from "lit-element";
import styles from "./home-page-styles"
import { getCharacters } from '../utils/rmUtils'

class HomePage extends LitElement {
  static get styles() {
    return [styles]
  }

  static get properties() {
    return {
      characters: { type: Array },
      favoritos: { type: Array },
    }
  }

  constructor() {
    super()
    this.favoritos = []
  }

  async firstUpdated() {
    await getCharacters()
      .then((res) => res.json())
      .then((data) => {
        this.characters = data.results
      })
      .catch((e) => console.error(e))

    this.characters.forEach(character => {
      character.isFavorite = false
    });

  }

  handleFavoritos(event) {
    this.characters = this.characters.map(character => 
      character.id === event.detail.item?.id ? { ...character, isFavorite: !character?.isFavorite } : character
    );
    const newFavorite = this.characters.find(c => c.id === event.detail.item?.id) 
    
    if (newFavorite?.isFavorite) this.favoritos = [...this.favoritos, newFavorite];
    else this.favoritos = this.favoritos.filter((fav) => fav.id !== newFavorite.id);

  }

 
  render() {
    return html`
    <div>

<favorite-characters .favoritos=${this.favoritos} @handle-favoritos="${this.handleFavoritos}"></favorite-characters>

    <div class="characters-grid">

      ${this.characters?.map((character) => {
      return html`<character-card .character=${character} @handle-favoritos="${this.handleFavoritos}">
      </character-card>`
      })}

    
    </div>
    </div>
    `
  }
}

customElements.define("home-page", HomePage)