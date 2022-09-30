var TEMPLATE = {
  toolbarCategory: /*html*/ `
  <a class="container-area-categoria h-100 " href="#%{nm_produto_categoria}">
    <div class="ball-area" id="Categoria%{nm_produto_categoria}" data-vtt-categoria-color="%{color_ball_category}" data-vtt-categoria-ball-area=""  >
    <img src="%{principal}" /> 
    </div>
    <p data-vtt-categoria-nm="%{nm_produto_categoria}" >
    %{tx_produto_categoria}
    </p>
  </a>
  `,
  category: /*html*/ `

  </div>
        <a
        class="text-center categoria w-100 d-flex align-items-end justify-content-center font-Roboto-Slab text-decoration-none" data-vtt-categoria-nm="%{nm_produto_categoria}" name="%{nm_produto_categoria}"
        >
        %{tx_produto_categoria}     
      </a>
      <div
        class="w-100"
        data-vtt-categoria="%{nm_produto_categoria}"
        data-vtt-teste="%{tx_descricao}"
        data-vtt-teste2="%{ts_alteracao}"
        data-vtt-teste3="%{cod_projeto}"
        data-vtt-lista-produtos=".*"
        data-vtt-template="product"
        data-vtt-extra-class-first-even-odd-last=",,flex-row-reverse,"
      >
      
      </div>
  `,

  product: /*html*/ `
  <div class="row row-container" id="cod-produto-%{cod_produto}">  
          <div class="col-7 caixa-produtos d-flex justify-content-between">
            <div class="caixa-produto d-flex flex-column" >
              <div
             
                class="caixa-produto-invisivel w-100 d-flex justify-content-center align-items-center"
              >
                <img
                  class="animate-produto h-100"
                  data-vtt-din="cod-produto"
                  data-vtt-cod-produto="%{cod_produto}"
                  data-vtt-tag="primary"
                />
              </div>
              <div class="description-container w-100">
                <div class="off-description d-flex justify-content-center">
                <div class="button-off-description"> 
                </div>
                </div>
                <div
                  class="description font-Roboto-Slab"
                  data-vtt-din="cod-produto"
                  data-vtt-cod-produto="%{cod_produto}"
                  data-vtt-tag="tx_descricao"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="caixa-invisivel col-5 d-flex flex-column justify-content-between align-items-center"
          
          >
            <p
              class="nome-produto justify-content-center row text-center d-flex align-items-center text-center w-100 font-Roboto-Slab"
              data-vtt-din="cod-produto"
              data-vtt-cod-produto="%{cod_produto}"
              data-vtt-tag="nm_descricao"
             
            >
              
            </p>
            <div class="caixa-valor w-100">
              <p
                
                class="textP-1 w-100 h-50 d-flex text-center justify-content-center font-Barlow-Condensed-SemiBold"
              >
                POR <br />APENAS
              </p>
    
              <p  class="textP-2 w-25 h-50 d-flex justify-content-end font-Barlow-Condensed-SemiBold">R$</p>
              <div class="w-75 h-50 float-end d-flex">
               <p
                class="textP-3 d-flex align-items-center font-Barlow-Condensed-Medium"
                data-vtt-din="cod-produto"
                data-vtt-cod-produto="%{cod_produto}" 
                data-vtt-teste="%{tx_descricao}"
                data-vtt-tag="preco_int"
               >    
              </p>
              <p
              class="textP-4 font-Barlow-Condensed-Condensed"
              data-vtt-din="cod-produto"
              data-vtt-cod-produto="%{cod_produto}"
              data-vtt-tag="preco_cent"
              >

              </p>
              </div>
            </div>
          </div>
        </div>`,
};
