


/**
 * goal elements selected event
 * @param {*} e 
 */
function showContent(e) {
    // display content in the information div/frame

    // make sure the node element is selected, not the content inside
    var node = e.target
    if (!node.classList.contains("gm-node")) {
        node = node.parentElement;
    }
    // change style of the selected node
    highlightSelectedNode(node);

    showSelectedNodeInfo(node);
}


/**
 * change selected node style
 */
function highlightSelectedNode(node) {
    // reset all nodes' styles
    var nodes = document.getElementsByClassName("gm-node");
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove("selected-node");
    }
    // add style
    node.classList.add("selected-node");
}

/**
 * show information of the selected node in the information board
 */
function showSelectedNodeInfo(node) {
    // obtain all <p> nodes of the goal node
    var content_list = node.children;
    var board_html = "";
    var item_name = "", item_content = "";

    // generate html
    board_html += "<table>"
    for (var i = 0; i < content_list.length; i++) {
        item_name = content_list[i].className;
        item_content = content_list[i].textContent;

        if (item_name.search("name") != -1 || item_name.search("threat") != -1 || item_name.search("asset") != -1 || item_name.search("interval") != -1 || item_name.search("target") != -1) {
            var item_name = item_name.slice(5); //remove the first parts
            board_html += "<tr> <th> <label for ='" + item_name + "'>" + item_name + "</label> </th>";
            board_html += "<th> <input type='text' id='" + item_name + "' value='" + item_content + "'> </th></tr>";
        }
    }
    board_html += "</table>"
    document.getElementById("info_board").innerHTML = board_html;
}