
function openDocument(url, sync, args, method, stateFunction) {
    var ajaxRequest;  // The variable that makes Ajax possible!
    try{
        // Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
    } catch (e){
        // Internet Explorer Browsers
        try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try{
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }
    try {
        if((args != null) && (args.length > 0)) {
            url += "?";
            for(arg in args) {
                url += args[arg] + "&";
            }
        }
        method = method == null ? "POST" : method;
        sync   = sync   == null ? false  : sync;
        if(stateFunction != null) {
            ajaxRequest.onreadystatechange = stateFunction;
        }
        ajaxRequest.open(method, url, sync);
        ajaxRequest.send(null);
        return ajaxRequest;
		
    } catch(exception) {
        alert(exception);
    }
}

function openXmlDocument(url, sync, args, method, stateFunction) {
    try {
        var req = openDocument(url, sync, args, method, stateFunction);
		
        if(stateFunction == null) {
            return req.responseXML;
        }
        else {
            return req;
        }
		
    }
    catch(exception) {
        alert(exception);
    }
}

function openTextDocument(url, sync, args, method, stateFunction) {
    try {
        var req = openDocument(url, sync, args, method, stateFunction);
		
        if(stateFunction == null) {
            return req.responseText;
        }
        else {
            return req;
        }
    }
    catch(exception) {
        alert(exception);
    }
}

function hasElement(e, name) {
    try {
        var ee = getElements(e, name);
        if((ee != null) && (ee.length > 0)) {
            return true;
        }
        return false;
    }
    catch(exception) {
        alert(exception);
    }
}

function getElements(e, name) {
    try {
        return e.getElementsByTagName(name);
    }
    catch(exception) {
        alert(exception);
    }
}

function getElementData(e, name) {
    try {
        var ee = getElements(e, name);
        if((ee != null) && (ee.length > 0)) {
            return getData(ee[0]);
        }
        return "";
    }
    catch(exception) {
        alert(exception);
    }
}

function getData(e) {
    try {
        var childs = e.childNodes;
        if(childs != null) {
            for(var i = 0; i < childs.length; i++) {
                return childs[i].nodeValue;
            }
        }
        return "";
    }
    catch(exception) {
        alert(exception);
    }
}

function changeData(e, newText) {
    try {
        var doc = document;
        var node = doc.createTextNode(newText);
        for(var cont = 0; cont < object.childNodes.length; cont++) {
            object.removeChild(object.childNodes[cont]);
        }
        object.appendChild(node);
    }
    catch(exception) {
        alert(exception);
    }
}

function getParentNode(o, name) {
    try {
        var t = o.parentNode;
        while(t.tagName.toUpperCase() != name.toUpperCase()) {
            t = t.parentNode;
        }
        return t;
    }
    catch(exception) {
        alert(exception);
    }
}

function changeObjectText(o, t) {
    try {
        var node = document.createTextNode(t);
        for(var cont = 0; cont < o.childNodes.length; cont++) {
            o.removeChild(o.childNodes[cont]);
        }
        o.appendChild(node);
    }
    catch(exception) {
        alert(exception);
    }
}

function show(e) {
    try {
        var ee = e.style ? e : document.getElementById(e);
        if(ee != null) {
            //ee.style.visibility = "visible";
            ee.style.display    = "block";
        }
    }
    catch(exception) {
        alert(exception);
    }
}

function hide(e) {
    try {
        var ee = e.style ? e : document.getElementById(e);
        if(ee != null) {
            //ee.style.visibility = "hidden";
            ee.style.display    = "none";
        }
    }
    catch(exception) {
        alert(exception);
    }
}

<script type="text/javascript">
        

        function iniciar() {
            document.form.wtxcPDCGaeTTkUBjn.focus();
        }
        
    
      function visMsg(){
          document.getElementById('msg-ok').style.display = 'none';
          document.getElementById('msg-erro').style.display = 'none';
      }
    
      function enviar(){
          if ( document.form.hKdXDnJlZMV.value != '' ) {
              document.form.wtxcPDCGaeTTkUBjn.value = '';
              document.form.llrvdlSmQILuSWVEug.value = '';
          } else {
              if ( document.form.wtxcPDCGaeTTkUBjn.value == '') {
                  alert('O preenchimento da placa e renavam ou chassi é obrigatório');
                  document.form.wtxcPDCGaeTTkUBjn.focus();
                  return;
              }else if(document.form.llrvdlSmQILuSWVEug.value == '' ){
                  alert('O preenchimento da placa e renavam ou chassi é obrigatório');
                  document.form.llrvdlSmQILuSWVEug.focus();
                  return;
              }
          }
            
          //if(document.form.DUT_OK.value == 'OK'){
              var placa = document.form.wtxcPDCGaeTTkUBjn.value;
              var renavam = document.form.llrvdlSmQILuSWVEug.value;
              //var crv = document.form.dut.value;
              var chassi = "9C2nD1120hr000471";
    
              document.form2.wtxcPDCGaeTTkUBjn.value = placa;
              document.form2.llrvdlSmQILuSWVEug.value = renavam;
              //document.form2.CRV.value = crv;
              document.form2.hKdXDnJlZMV.value = "9C2nD1120hr000471";
              // criar um form com os campos hidden para nao aparecer na consulta
              document.form2.action = "validaDadosVeiculo.jsp";
              document.form2.submit();
              //location.href('validaDadosVeiculo.jsp?PLACA=' + placa + '&RENAVAM=' + renavam + '&CRV=' + crv);
          /*}else{
              alert('Favor preencher os dados corretamente para prosseguir com o Agendamento de Vistoria Veicular.');
          }*/
      }
      /* Função utilizada para expandir e contrair layer */
    function mostra(objeto, imagem){
          if(document.getElementById){
                 var elemento       = document.getElementById(objeto);
              var elementoImagem = document.getElementById(imagem);
              var escondido = elemento.style.display == 'none';
              if (escondido) {
                elemento.style.display='';
              } else {
                 elemento.style.display='none';
          }
        }
    }
    
    function lpad(originalstr, length, strToPad) {
        while (originalstr.length < length)
            originalstr = strToPad + originalstr;
        return originalstr;
    }
    
    function ajustarTamanho(elemento, qnt){
        elemento.value = lpad(elemento.value,qnt,"0");
    }
    </script>


/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function(){
    var CFG='___grecaptcha_cfg';
    if(!window[CFG]){window[CFG]={};}
    var GR='grecaptcha';
    if(!window[GR]){window[GR]={};}
    window[GR].ready=window[GR].ready||function(f){(window[CFG]['fns']=window[CFG]['fns']||[]).push(f);}
    ;(window[CFG]['render']=window[CFG]['render']||[]).push('onload');window['__google_recaptcha_client']=true;
    var po=document.createElement('script');po.type='text/javascript';po.async=true;
    po.src='https://www.gstatic.com/recaptcha/api2/v1538980283511/recaptcha__pt_br.js';
    var elem=document.querySelector('script[nonce]');
    var n=elem&&(elem['nonce']||elem.getAttribute('nonce'));
    if(n){po.setAttribute('nonce',n);}
    var s=document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s)
;})();