# Introduction

This a bare minimum framework setup of cypress for QA Recruitment Workshop

## Tests Covered:

* UI

## Framework used:

* Cypress

## Design Pattern used:
* Page Object Model _(POM)_

## Prerequisite:
* npm - 7.24.0
* node - 16.10.0

## Steps to Run:

1. Clone GIT repository in named directory.

   **_Run:_**
    ```
     > cd ~/workspace/
     > mkdir <cypress_directory_name>
     > cd <cypress_directory_name>
     > git clone https://github.com/tarunmaini16/wdio.git
    ```     

2. Install all dependencies -

   **_Run:_**
    ```
        > cd ~/workspace/<cypress_directory_name>/<where_your_package.json_is>
        > npm install cypress
        > npm install
     ```       
   **Note**: This will install all dependencies project will be using for executing.


3. To run test -

   **_Run:_**
    ```
    > cd ~/workspace/<cypress_directory_name>
    > npx cypress open
    ```
    - This will run all tests under <cypress_directory_name> directory

## Additional Information

* cypress.json can be use to make any config change i.e baseUrl

## Author

* Tarun Maini

## References

* <https://www.cypress.io/>
