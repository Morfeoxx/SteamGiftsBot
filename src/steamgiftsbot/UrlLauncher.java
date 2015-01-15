/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package steamgiftsbot;

import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
/**
 *
 * @author Manos
 */
public class UrlLauncher {
    public void launch(String link) throws URISyntaxException, IOException{
        if(Desktop.isDesktopSupported()){
            Desktop.getDesktop().browse(new URI(link));
        }
    }
}
