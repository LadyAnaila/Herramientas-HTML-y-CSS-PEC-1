var form=document.querySelector("form");form.addEventListener("submit",(function(e){e.preventDefault();var o=new FormData(e.target);fetch("/arkham_data_form.txt",{method:"POST",body:o}).then((function(e){if(!e.ok)throw new Error("Por favor, revisa los datos y vuelve a intentarlo.");alert("Gracias por tu mensaje! Recibirás una respuesta a la mayor brevedad posible.")})).catch((function(e){console.error(e),alert("Por favor, revisa los datos y vuelve a intentarlo.")}))})),Modernizr.backgroundsize||(document.documentElement.className+=" no-backgroundsize"),Modernizr.boxshadow||(document.documentElement.className+=" no-boxshadow"),Modernizr.boxsizing||(document.documentElement.className+=" no-boxizing"),Modernizr.gridtemplatecolumns||(document.documentElement.className+=" no-grid"),Modernizr.flexbox||(document.documentElement.className+=" no-flexbox");
//# sourceMappingURL=index.c7c7327f.js.map