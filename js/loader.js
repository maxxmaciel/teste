function load_nodes(nodes) {
  for (var node_nm in nodes) {
    var node = nodes[node_nm];
    node.nodes = $(node.selector);

    for (var ev_nm in node.events) {
      var ev = node.events[ev_nm];
      node.nodes.on(ev_nm, ev);
    }
  }
}

var build_node_txt = function (no_json, template) {
  var text = template.replace(/\%\{(.*?)\}/g, function (f) {
    var field_name = f.substr(2, f.length - 3);

    var result = no_json[field_name];
    return std.ifNull(result, f);
  });
  return text;
};

var build_product_node = function (container, produto, template, idx) {
  var text = build_node_txt(produto.txt_tags, template);
  container.append(text);

  var result = container.find("#cod-produto-" + produto.txt_tags.cod_produto);
  return result;
};

var load_pg = function (root) {
  RenderCatToo();

  var categories = $("[data-vtt-categoria]");

  categories.each(function (i, e) {
    var cat_node = $(e);
    var nm_cat = cat_node.data("vtt-categoria");
    var lista = cat_node.data("vtt-lista-produtos");
    var template = cat_node.data("vtt-template");
    var internal_temp = TEMPLATE[template];

    var extraclass = std
      .ifNull(cat_node.data("vtt-extra-class-first-even-odd-last"), "")
      .split(",");

    var idx = 0;
    for (var cod_produto in info_cat.produtos.cod_produto) {
      var produto = info_cat.produtos.cod_produto[cod_produto];
      if (produto.txt_tags.categoria == nm_cat) {
        var node_extraclass = "";
        if (idx == 0) {
          node_extraclass += extraclass[EXTRACLASS.IDX_FIRST];
        }
        if (idx % 2 == 0) {
          node_extraclass += extraclass[EXTRACLASS.IDX_EVEN];
        }

        if (idx % 2 == 1) {
          node_extraclass += extraclass[EXTRACLASS.IDX_ODD];
        }

        if (idx % 2 == 0) {
          node_extraclass += extraclass[EXTRACLASS.IDX_EVEN];
        }
        var newNode = build_product_node(cat_node, produto, internal_temp, idx);
        newNode.addClass(node_extraclass);
        ++idx;
      }
    }
  });

  var nodes = $("[data-vtt-cod-produto]");

  nodes.each(function (i, e) {
    var el = $(e);

    var tag = el.data("vtt-tag");
    var cod_produto = el.data("vtt-cod-produto");

    if (e.tagName == NODETAG.IMG) {
      var src = info_cat.produtos.cod_produto[cod_produto].img_tags[tag].url;
      e.src = src;
    } else {
      var txt = info_cat.produtos.cod_produto[cod_produto].txt_tags[tag];
      el.text(txt);
    }
  });
  

  function RenderCatToo() {
    let container = $("[data-vtt-category-toolbar-container]");
    let container2 = $("[data-vtt-produtos-container]");

    for (nm_categoria in info_cat.categorias.nm_categoria) {
      var Category = info_cat.categorias.nm_categoria[nm_categoria];
      var no_json = info_cat.categorias.nm_categoria[nm_categoria].txt_tags;

      let text = build_node_txt(no_json, TEMPLATE.toolbarCategory);

      //principal: "imagens/Artesanais/bobs-artesanal.png"
      ///secundaria: "https://midias.vtsign.com.br/catalago/19/Categorias/2/C9F0F895FB98AB9159F51FD0297E236D.jpg"
      var map = std.projection(Category.img_tags, "url_imagem");

      text = build_node_txt(map, text);
      container.append(text);

      var ColorCategorie = Category.txt_tags.color_ball_category;

      var DivBall = $(`#Categoria${nm_categoria}`)[0];

      // var DivBall = $("[data-vtt-categoria-ball-area]");

      DivBall.style.background = ColorCategorie;

      text = build_node_txt(no_json, TEMPLATE.category);

      // DivBall.children[0].setAttribute(
      //    "src",
      //    std.projection(Category.img_tags, "url_imagem").principal
      //  );

      no_json = info_cat.categorias.nm_categoria[nm_categoria].txt_tags;
      text = build_node_txt(no_json, TEMPLATE.category);

      container2.append(text);
    }

    function Hide_and_Show_Toolbar() {
      var scrollStopped;

      var fadeInCallback = function () {
        if (typeof scrollStopped != "undefined") {
          clearInterval(scrollStopped);
        }

        scrollStopped = setTimeout(function () {
          container.animate({ top: "-16vw" }, "slow");
        }, 2500);
      };

      $(window).scroll(function () {
        if (!container.is(":animated")) {
          container.animate({ top: "0" }, "slow", fadeInCallback);
        } else {
          fadeInCallback.call(this);
        }
      });
    }
    Hide_and_Show_Toolbar();
  }
};
