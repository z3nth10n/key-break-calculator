/*var avail = 
{[
 	"Symmetric":
	{[
		"3DES":[112, 168], 
		"DES":[56], 
		"MARS":null,
		"IDEA":null, 
		"AES/Rinjdael":[64, 96, 128, 192, 256, 384, 512], 
		"RC2":null, 
		"RC4":null, 
		"RC5":null, 
		"RC6":null, 
		"Blowfish":null, 
		"Twofish":null, 
		"Threefish":null, 
		"Serpent":null
	]},
    "Asymetric":
    {
    	"RSA":[128, 256, 512, 1024, 2048, 4096],
    	"ElGamal":null, 
    	"Diffie-Hellman":null, 
    	"ECC":null
    },
    "Hashing":
    {
        "SHA0":null, 
        "SHA1":null, 
        "SHA2":null, 
        "SHA3":null, 
        "MD6":null, 
        "MD5":null, 
        "MD4":null, 
        "MD2":null, 
        "bcrypt":null, 
        "crypt":null, 
        "scrypt":null
    }
]};*/

var avail = 
{[
 	{"Symmetric":
	[
		{"3DES":[112, 168]}, 
		{"DES":[56]},
		{"MARS":null},
		{"IDEA":null}, 
		{"AES/Rinjdael":[64, 96, 128, 192, 256, 384, 512]}, 
		{"RC2":null},
		{"RC4":null}, 
		{"RC5":null}, 
		{"RC6":null}, 
		{"Blowfish":null}, 
		{"Twofish":null},
		{"Threefish":null}, 
		{"Serpent":null}
	]},
    {"Asymetric":
    [
    	{"RSA":[128, 256, 512, 1024, 2048, 4096]},
    	{"ElGamal":null},
    	{"Diffie-Hellman":null}, 
    	{"ECC":null}
    ]},
    {"Hashing":
    [
        {"SHA0":null}, 
        {"SHA1":null}, 
        {"SHA2":null}, 
        {"SHA3":null}, 
        {"MD6":null},
        {"MD5":null}, 
        {"MD4":null}, 
        {"MD2":null}, 
        {"bcrypt":null}, 
        {"crypt":null},
        {"scrypt":null}
    ]}
]};

$(document).ready(function() {
    //$("#host").html(xdomain.origin);
    //console.log($.get('https://www.cpubenchmark.net/CPU_mega_page.html'));
    //$("#cross").load('https://www.cpubenchmark.net/CPU_mega_page.html');
    $("body").on('DOMSubtreeModified', '#tab', function(e, data) {
        //console.log($('#cputable').tableToJSON());
        console.log("hola");
    });

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var parser = new DOMParser();
            htmlDoc = parser.parseFromString(this.responseText, "text/html");
            document.getElementById("tab").innerHTML = htmlDoc.querySelector("[id=cputable]").outerHTML;
            //var html = $.parseHTML(this.responseText);
            //$('<output>').html(html);
        }
    }
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://www.cpubenchmark.net/CPU_mega_page.html");
    //xhr.setRequestHeader("Accept", 'application/json');
    xhr.send();

    //Generate options for the selects

    for (var el1 in avail) {
        $("#loop1").append(new Option(el1, 0));
        if(avail[el1] != null) {
            for(var el2 in el1) {
                console.log(el1[el2]);
                $("#loop2").append(new Option(el2, 0));
                if(el1[el2] != null) {
                    for(var el3 in el2) {
                        $("#loop3").append(new Option(el3, 0));
                        //if(el2[el3] != null)
                    }
                }
            }
        }
    }
});