<img src="https://raw.githubusercontent.com/FritzCohen/LumiOS/refs/heads/main/images/no-bg-logo.png"/>
Your new favorite OS
---------------------------------

To download v16 click [here](

# LumiOS v16 


> Licensed under the Apache License 2.0


---<img src="https://raw.githubusercontent.com/FritzCohen/LumiOS/refs/heads/main/images/demoscreen.png"/><img width="2868" height="1548" alt="image" src="https://github.com/user-attachments/assets/7451cbb7-00c7-4825-a6c1-a6dc584e0251" />

<img src="https://raw.githubusercontent.com/FritzCohen/LumiOS/refs/heads/main/images/demoscreen2.png"/>




---

## Features

* Local proxy request routing
* Request interception and logging
* Middleware-based architecture
* Security filtering rules
* Modular and expandable structure
* Developer-focused debugging tools

---

## Downloading

LumiOS can be run locally or built from source.

### Download Latest Version

Download the latest release here:

https://raw.githubusercontent.com/LuminesenceProject/LumiOS/main/LumiOS.latest.html

Or clone the repository:

```bash
git clone https://github.com/your-username/dev-proxy-and-security.git
cd dev-proxy-and-security
```

### Can I run this on a Chromebook?

Yes you can open your file manager after downloading the link

### How do I update?

Download the latest release or pull the latest changes from the repository.

---

## Bookmarklet (Optional)

You can inject a lightweight proxy helper into a page using this bookmarklet:

```javascript
javascript:(function(){alert('Dev Proxy loader placeholder - connect your hosted script here');})();
```

---

## Getting Started

This project uses Node.js + TypeScript.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/dev-proxy-and-security.git
cd dev-proxy-and-security
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## Contributing

This project is open source.

* Fork the repository
* Create a feature branch
* Submit a pull request

Please clearly describe any changes you make, especially security-related ones.

---

## Issues & Support

To report bugs or request features:

* Open a GitHub Issue
* Provide logs or screenshots when possible

---

## Common Issues & Fixes

### Proxy not responding

* Check if the server is running
* Verify port configuration in `config/default.json`

### Requests not logging

* Ensure logging middleware is enabled

### Build errors

* Delete `node_modules` and reinstall dependencies

```bash
rm -rf node_modules
npm install
```

---

## Todo

* Add GUI dashboard
* Improve request filtering engine
* Add plugin system
* Add autoupdater system
* Expand middleware API
* Add remote debugging tools

---

## License & Terms

This project is licensed under the Apache License 2.0.

By using this project, you agree to comply with its license terms.

---

## Modification and Redistribution

If you modify and redistribute this project, you must:

* Clearly disclose modifications
* Provide a link to the original repository
* Maintain attribution to the original project
* Include a copy of the Apache 2.0 license

---

## Notes
