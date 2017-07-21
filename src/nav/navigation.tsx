import * as React from "react";
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import {RaisedButton} from 'material-ui';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Navigation = () => (
    <div>
    <AppBar
        title="JavaScript / TypeScript Experimentation Area"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={{marginBottom: "22px"}}
    />

    </div>
);

export default Navigation;