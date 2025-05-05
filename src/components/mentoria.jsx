import React from "react";

export const Mentoria = (props) => {
  return (
    <div>
      <h1>{props.data ? props.data.title : "Mentoria Individual"}</h1>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
            <img src={`${process.env.PUBLIC_URL}/img/5.png`} className="img-responsive" alt="Mentoria" />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Mentoria Individual</h2>
                <p>{props.data ? props.data.paragraph : "Carregando..."}</p>
                <h3>Estou Pronta para Te Ensinar a Fazer Dinheiro com o BPC/LOAS!</h3>

                {/* Para quem é essa mentoria */}
                <h4>Para quem é essa mentoria:</h4>
                <ul>
                  {props.data && props.data.forWhom ? (
                    props.data.forWhom.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>Carregando...</li>
                  )}
                </ul>

                <p></p>
                {/* O que você vai aprender */}
                <h4>O que você vai aprender:</h4>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data && props.data.learnList1 ? (
                        props.data.learnList1.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>Carregando itens...</li>
                      )}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data && props.data.learnList2 ? (
                        props.data.learnList2.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>Carregando itens...</li>
                      )}
                    </ul>
                  </div>
                </div>

                

                {/* Final message */}
                <button class="entreContato "> Entre em Contato </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
