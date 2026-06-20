function extractURLs() {
    try {
        var scripts = document.getElementsByTagName("script"),
            regex = /(?<=(\"|\'|\`))\/[a-zA-Z0-9_?&=\/\-\#\.]*(?=(\"|\'|\`))/g; // ✅ regex كما هو
        const results = new Set();
        const fetchPromises = [];

        for (var i = 0; i < scripts.length; i++) {
            var t = scripts[i].src;
            if (t !== "") {
                results.add(t);

                // ✅ جلب محتوى السكريبتات لمحاولة استخراج مزيد من الروابط
                fetchPromises.push(
                    fetch(t)
                        .then(response => response.text())
                        .then(text => {
                            var matches = text.matchAll(regex);
                            for (let match of matches) results.add(match[0]);
                        })
                        .catch(error => console.log("Error fetching script:", error))
                );
            }
        }

        var pageContent = document.documentElement.outerHTML,
            matches = pageContent.matchAll(regex);

        for (const match of matches) results.add(match[0]);

        Promise.all(fetchPromises).then(() => {
            console.log("Extracted URLs:", Array.from(results)); // ✅ عرض النتائج في Console

            chrome.storage.local.set({ extractedUrls: Array.from(results) }, () => {
                console.log("Data saved successfully!");
            });
        });

    } catch (error) {
        console.error("Error in extractURLs:", error);
    }
}

extractURLs(); // ✅ تشغيل الكود تلقائيًا عند فتح الصفحة
