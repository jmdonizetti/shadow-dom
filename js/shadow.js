class CardCast extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }
        build() {
            const componentRoot = document.createElement("section");
            componentRoot.setAttribute ("class", "card");

            //Card__image
            const card__image = document.createElement("div");
            card__image.setAttribute ("class", "card__image");

            const newImage = document.createElement("img");
            newImage.src = this.getAttribute("photo") || "assets/default.jpg";
            newImage.alt = "news photo";

            const linkImage = document.createElement("a");
            linkImage.href = this.getAttribute("link-url");
            linkImage.setAttribute("target", "blank");

            linkImage.appendChild(newImage);
            card__image.appendChild(linkImage);
            

            //Card__text

            const card__text = document.createElement("div");
            card__text.setAttribute ("class", "card__text");

            const episodio = document.createElement("p");
            episodio.setAttribute("class", "episodio");
            episodio.textContent = this.getAttribute("episodio");

            const titulo = document.createElement("h1");
            titulo.setAttribute ("class", "titulo_nerdCast");
            titulo.textContent = this.getAttribute("titulo");

            const data = document.createElement("h3");
            data.setAttribute("class", "data");
            data.textContent = this.getAttribute("data");

            card__text.appendChild(episodio);
            card__text.appendChild(titulo);
            card__text.appendChild(data);

            componentRoot.appendChild(card__image);
            componentRoot.appendChild(card__text);

            return componentRoot; 
        }

        style () {
            const style = document.createElement("style");
            style.textContent = `
            *{
                margin: 0;
                padding: 0;
            }
            
            .titulo {
                text-align: center;
                margin: 10px;
                padding: 10px;
                padding-bottom: 20px;
            }
            
            .card{
                border: 1px solid black;
                box-shadow: 5px 5px 30px 2px #000;
                border-radius: 10px;
                margin-bottom: 15px;
            
                height: 50%;
                width: 50%;
            
                display: flex;
            }
            
            
            img { 
                width: 12.5rem;
                border-radius: 10px;
                box-shadow: 5px 5px 30px 2px #000;
            }
            
            .episodio {
                font-size: 13px;
                color: rgb(0, 185, 182);
            }

            .card__text > p, h1, h3 {
                padding-top: 10px;
                padding-left: 30px;
                font-family: "Inter", sans-serif;
                font-weight: bolder;
            }
            
            .titulo_nerdCast {
                padding-top: 5px;
                font-size: 1.1rem;
            }
            
            .data {
                font-family: Arial, Helvetica, sans-serif;
                color: gray;
                
            }
            
            img:hover {
                scale: 1.05;
                transition: .3s;
            }
            `;
            return style;
        }
}

customElements.define("card-cast", CardCast);