        var myWallet = document.getElementById('w');

        async function loadWeb3() {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                window.ethereum.enable();
            }
        }

        async function getCurrentAccount() {
            const accounts = await window.web3.eth.getAccounts();
                myWallet.innerHTML = myWallet.innerHTML+"<h6 style="font-size: 10px;">"+accounts[0]+"</h6>";
             console.log(accounts[0]);
        }

    
        async function load() {
            await loadWeb3();
            getCurrentAccount();
            console.log("Ready");
        }

        load();
