function trackPackage() {
      			const id = document.getElementById("trackingID").value;
      			const message = document.getElementById("message");
      			const status = document.getElementById("status");

      		if (id.startsWith("MARS-")) {
        		message.innerHTML = "<ion-icon name='rocket-outline'></ion-icon> Tracking " + id + " ...";

        		const randomStatus = ["In Transit ", "Landed ", "Delayed "];
        		const statusText = randomStatus[Math.floor(Math.random() * 3)];

        		status.innerHTML = "<ion-icon name='cube-outline'></ion-icon> Status: " + statusText;

        	if (statusText.includes("Landed")) status.style.color = "green";
        	else if (statusText.includes("Transit")) status.style.color = "orange";
        	else status.style.color = "red";
      		} 
		else {
        		message.innerHTML = "<ion-icon name='alert-circle-outline'></ion-icon> Invalid ID! Must start with MARS-";
        		status.textContent = "";
      			}
    		}

    		function notifyArrival() {
      			const id = document.getElementById("trackingID").value;
      			if (id === "") {
        		alert("Please enter a tracking ID first!");
     			 } 
			else {
        			alert("You will be notified when package " + id + " arrives!");
      			}
    		}
