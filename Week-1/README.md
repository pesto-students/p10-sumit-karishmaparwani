* When a user enters an URL in the browser? 

URL: Stands for Uniform Resource Locator. 
     URL is the address of the website which you can find in the address bar of your web browser. 
     It is a reference to a resource on the internet.

     For eg: https://pestotech.teachable.com/

     DNS is short for Domain Name System. Like a phonebook, DNS maintains and maps the name of the website, i.e. URL
     Every URL on the internet has a unique IP address which is of the computer which hosts the server of the website requested.

* Steps for what happens when we enter a URL

   1. Browser checks cache for DNS entry to find the corresponding IP address of website.
   2. It looks for following cache. If not found in one, then continues checking to the next until found.
        Browser Cache
        Operating Systems Cache
        Router Cache
        ISP Cache
    3. If not found in cache, ISP’s (Internet Service Provider) DNS server initiates a DNS query to find IP address of server that hosts the domain name.
       The requests are sent using small data packets that contain information content of request and IP address it is destined for.
    4. Browser initiates a TCP (Transfer Control Protocol) connection with the server using synchronize(SYN) and acknowledge(ACK) messages.
    5. Browser sends an HTTP request to the web server. GET or POST request.
    6. Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
    7. Server sends out an HTTP response along with the status of response.
    8. Browser displays HTML content


* The browser's main components 

    1. The user interface: This includes the address bar, back/forward button, bookmarking menu, etc. 
                           Every part of the browser display except the window where you see the requested page.
    2. The browser engine: Marshals actions between the UI and the rendering engine.
    3. The rendering engine: responsible for displaying requested content. 
                            Ex.if the requested content is HTML, the rendering engine parses HTML and CSS, 
                            and displays the parsed content on the screen.
    4. Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
    5. UI backend: used for drawing basic widgets like combo boxes and windows. 
                   This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
    6. JavaScript interpreter: Used to parse and execute JavaScript code.
    7. Data storage: This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. 
                     Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

    ![Browser Components](https://user-images.githubusercontent.com/53943377/224330289-956dea1f-9d59-44a1-ae6b-0090e59f9f64.png)                 

 * Rendering engine

    Once a user requests a particular document, the rendering engine starts fetching the content of the requested document.
    This is done via the networking layer. The rendering engine starts receiving the content of that specific document in chunks of 8 KBs from the networking layer.
    After this, the basic flow of the rendering engine begins.

  # The four basic steps include:

    1. The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. 
       The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”
    2. Simultaneously, the browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that 
       define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.
    3. Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. 
       The entire process of calculating values for evaluating the desired position is called a layout process. 
       In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.
    4. The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, 
       which paints each node on the screen using the UI backend layer.

    ![Rendering Engine Basic Flow](https://user-images.githubusercontent.com/53943377/224330471-ff9e1142-e47c-44a7-be4d-56c729b5c3bf.png)
   

 * How Parsing works and its importance
    1. Once the browser receives the first chunk of data, it can begin parsing the information received.
       Parsing is the step the browser takes to turn the data it receives over the network into the DOM and CSSOM, 
       which is used by the renderer to paint a page to the screen.

    2. Even if the requested page's HTML is larger than the initial 14KB packet, 
       the browser will begin parsing and attempting to render an experience based on the data it has. 

    3. This is why it's important for web performance optimization to include everything the browser needs to start rendering a page,
       or at least a template of the page - the CSS and HTML needed for the first render — in the first 14 kilobytes. 
       But before anything is rendered to the screen, the HTML, CSS, and JavaScript have to be parsed. 

    Parsing can be separated into two sub processes: lexical analysis and syntax analysis.
        Lexical analysis is the process of breaking the input into tokens. 
                        Tokens are the language vocabulary: the collection of valid building blocks.
                        In human language it will consist of all the words that appear in the dictionary for that language.
        Syntax analysis is the applying of the language syntax rules.

   ![Parser ](https://user-images.githubusercontent.com/53943377/224330604-f61e3eec-389c-430e-9bf9-336cda00955b.png)
     

* Script Processors

    The script processor executes Javascript code to process an event.
    The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies. 
    This can be useful in situations where one of the other processors doesn't provide the functionality you need to filter events.

   # The script processor has the following configuration settings:

    #lang: This field is required and its value must be javascript.

    tag: This is an optional identifier that is added to log messages. If defined it enables metrics logging for this instance of the processor. 
         The metrics include the number of exceptions and a histogram of the execution times for the process function.

    source: Inline Javascript source code.
    
    file: Path to a script file to load. Relative paths are interpreted as relative to the path.config directory. Globs are expanded.

    files: List of script files to load. The scripts are concatenated together. Relative paths are interpreted as relative to the path.config directory. 
           And globs are expanded.

    params: A dictionary of parameters that are passed to the register of the script.

    tag_on_exception: Tag to add to events in case the Javascript code causes an exception while processing an event. Defaults to _js_exception.

    timeout: This sets an execution timeout for the process function. When the process function takes longer than the timeout period the function is interrupted. 
             You can set this option to prevent a script from running for too long (like preventing an infinite while loop). By default there is no timeout.

    max_cached_sessions: This sets the maximum number of Javascript VM sessions that will be cached to avoid reallocation. The default is 4.

* Tree construction

   Tree construction is a process that is used by a web browser to represent the content and structure of a webpage in a hierarchical manner. This is done using a tree-like structure known as the Document Object Model (DOM) tree.


   The process of tree construction begins when the browser receives the HTML code for a webpage. The browser uses a parser to analyze the HTML code and identify the different elements on the page, such as headings, paragraphs, and links. It then organizes these elements into a hierarchical structure, with each element becoming a node in the tree. The root node of the tree represents the entire webpage, and each child node represents a specific element on the page.

   Tree construction is important because it allows the browser to understand the content and structure of the webpage in a way that it can use to determine how the page should be displayed to the user. The DOM tree provides a representation of the page that the rendering engine can use to render the content and apply styles, and that JavaScript code can use to manipulate the page. Without tree construction, the browser would not be able to accurately render the content of the page.    

* Order of execution of scripts    

    Script tags are executed in the order they appear

        Ex.

        <script>
        var x = 3;
        </script>
        <script>
        alert(x);
        // Will alert '3';
        </script>

        or

    <script src="//typekit.com/fj3j1j2.js"></script>
    <!-- This second script won’t execute until typekit has executed, or timed out -->
    <script src="//my.site/script.js"></script>

    It similarly works for combinations of local and remote scripts.

    It also means scripts which appear later on the page can depend on things scripts which appear earlier have done.

    Elements on the page won’t render until all the script tags preceding them have loaded and executed. 

    * async and defer : HTML5 has added a couple tools for controlling when scripts execute.

    async means “execute this whenever”. More specifically that means: I don’t care if you execute this after the whole page has loaded, 
          and every other script has executed. It’s very useful for analytics tracking codes, for example, where no other code on the page depends on their 
          execution. 
          
    defer means “wait for the parser to finish to execute this”. It’s roughly equivalent to binding your script to the DOMContentLoaded event, or using jQuery.ready.
          When the code does run, everything in the DOM will be available for you to use. 
          Unlike async, defer’d code will run in the order it appears in the HTML of the page, it is just deferred until after the HTML is fully parsed.

* Layout and Painting

    The layout of a web page is typically specified by Cascading Style Sheets (CSS). 
    Each style sheet is a series of rules which the browser engine interprets. 
    For example, some rules specify typography details, such as font, color, and text size.
    The engine combines all relevant CSS rules to calculate precise graphical coordinates for the visual representation it will paint on the screen.