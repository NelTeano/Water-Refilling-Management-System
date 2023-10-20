# Water-Refilling-Management-System using MERN STACK<br> w/ React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  
# Features
# Website UI


## Set up and test run the server in your local device.


1. **Download the project**

    Open a terminal and `cd` to the directory where you want to clone
    the project repository, then copy-paste the commands below in the
    terminal command line.

    ```cmd
    git clone https://github.com/NelTeano/Water-Refilling-Management-System.git
    npm install
    cd server
    npm install
    ```

  2. **Create .env file**
  
Set up the environmental variables for the use of other packages especially the database it requires DATABASE_URL so that it can able to connect to your mongoDB and also for the Auth0


Create a file called `.env` in the
`root` and `server` folder'.<br><br><br>




**(ONLY IF YOURE CLONING THIS FOR YOUR OWN USE NOT TO DEVELOP HERE------------------------------------------------------------------)** <br>


  3. **Create Auth0 Account**
in Auth0 Website after you created your account in creating a project you will select `single page web app`
in the Auth0 `dashboard` then select `application` after that elect one of the application
in there you need to get the following `DOMAIN` and `CLIENT_ID` of your application for .env `VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID`

**(-------------------------------------------------------------------------------------------------------------------------------------------------------)** <br><br><br>











4. **Paste this values inside `.env` in `main(ROOT)` file :**

    ```js
    VITE_AUTH0_DOMAIN="<YOUR APPLICATION AUTH0 DOMAIN>"
    VITE_AUTH0_SECRET="<YOUR APPLICATION AUTH0 SECRET>"
    VITE_AUTH0_CLIENT_ID="<YOUR APPLICATION AUTH0 CLIENT>"
    VITE_LONG_SECRET="a7182b4eade3c0d66f2dbe7f311fa0893ec2de3601b464554e7604b5a72669f3"
    ```
    
    **Paste this values inside `.env` in `server` file :**
   
    ```js
    VITE_DATABASE_URI="<DATABASE CONNECTION URL(gets in MongoDB)>"
    ```
   
   
5. **Run the application**

    1. Open two terminal command lines.
    2. Open the project's **root** directory for each terminal.
    3. In the first terminal enter the command `npm run dev`.
    4. In the second terminal enter the command `cd server then npm run start`.
    5. Wait for both terminals to finish setting up.

6. **Access the application**

    Open the address `localhost:5173` on a browser
