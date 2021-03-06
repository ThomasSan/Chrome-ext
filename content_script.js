walk(document.body);
setTimeout(function () {
	walk(document.body);
}, 1000);

function walk(node)
{
	// Source: http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bfoot\b/g, "TGFDP");
	v = v.replace(/\bFoot\b/g, "TGFDP");
	v = v.replace(/\bFOOT\b/g, "TGFDP");
	v = v.replace(/\bfootball\b/g, "TGFDP");
	v = v.replace(/\bFootball\b/g, "TGFDP");
	v = v.replace(/\bFOOTBALL\b/g, "TGFDP");
	textNode.nodeValue = v;
}
