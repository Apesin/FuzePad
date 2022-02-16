        var myWallet = document.getElementById('w');

        async function loadWeb3() {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                window.ethereum.enable();
            }
        }

        async function getCurrentAccount() {
            const accounts = await window.web3.eth.getAccounts();
//                 if(accounts.length != 0){
                myWallet.innerHTML = myWallet.innerHTML+"<span style="font-size: 10px;">"+accounts[0]+"</span>";
//                 }else{
//                         myWallet.innerHTML = myWallet.innerHTML+"<span style="font-size: 10px;">Connect wallet</span>";
//                 }
             console.log(accounts[0]);
        }

    
        async function load() {
            await loadWeb3();
            getCurrentAccount();
            console.log("Ready");
        }

        load();
