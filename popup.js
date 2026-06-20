document.addEventListener("DOMContentLoaded", function () {
    let refreshButton = document.getElementById("refresh");
    let copyButton = document.getElementById("copy");
    let urlList = document.getElementById("urlList");
    urlList.innerHTML = "";

    if (refreshButton) {
        refreshButton.addEventListener("click", function () {
            location.reload();
        });
    }

    if (copyButton) {
        copyButton.addEventListener("click", function () {
            let urls = Array.from(urlList.children).map(li => li.textContent).join("\n");
            navigator.clipboard.writeText(urls).then(() => {
                console.log("Copied to clipboard!"); 
            }).catch(err => console.error("Failed to copy: ", err));
        });
    }

    chrome.storage.local.get("extractedUrls", function (data) {
        let extractedData = data.extractedUrls || [];

        console.log("Stealth URL Extractor:", extractedData);

        if (extractedData.length > 0) {
            extractedData.forEach(url => {
                let li = document.createElement("li");
                li.textContent = url;
                urlList.appendChild(li);
            });
        } else {
            urlList.innerHTML = "<li>No URLs found. Try again!</li>";
        }
    });
});