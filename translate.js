function Translate(word,language){

    this.apikey="";
    this.word=word;
    this.language=language;

    //xhr obg-ject

    this.xhr=new XMLHttpRequest();
    
}

Translate.prototype.translateWord=function(callback){

    //ajax işlemleri

    const endpoint=`api key`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload= () =>{

        if(this.xhr.status===200){

            const json=JSON.parse(this.xhr.responseText);
            const text=json.text[0];
            callback(null,text);
            
        }else{

            //hata
            callback(" bir hata olustu",null);
        }

    }

    this.xhr.send();

};

Translate.prototype.changeParameters=function(newWord,newLanguage){

    this.word=newWord;
    this.language=newLanguage;

}