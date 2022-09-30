function testeLoader() {
  var container = $("#divtest");
  var cat = null;
  var produto = {
    txt_tags: {
      cod_produto: 1,
      txtdescricao: "lorem ipsum",
    },
  };
  var template = "teste %{cod_produto}";
  var expected = "teste 1";
  var result = build_node_txt(produto, template);

  console.log("verificado teste loader[" + (result == expected) + "]");
  console.log(result);
  console.log(expected);
}
