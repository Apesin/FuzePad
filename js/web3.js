        var myWallet = document.getElementById('myWallet');

        async function loadWeb3() {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                window.ethereum.enable();
            }
        }

        async function getCurrentAccount() {
            const accounts = await window.web3.eth.getAccounts();
                myWallet.innerHTML = myWallet.innerHTML+"<span>"+accounts[0]+"</span>";
             console.log(accounts[0]);
        }

    
        async function load() {
            await loadWeb3();
            getCurrentAccount();
            console.log("Ready");
        }

        load();
