/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package steamgiftsbot;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Manos
 */
public class Corrector {
    public Corrector() {
        Path path = Paths.get("index.html");
        Charset charset = StandardCharsets.UTF_8;

        String content = "";
        try {
            content = new String(Files.readAllBytes(path), charset);
        } catch (IOException ex) {
            Logger.getLogger(Corrector.class.getName()).log(Level.SEVERE, null, ex);
        }
        content = content.replaceAll("post fade", "post_fade");
        try {
            Files.write(path, content.getBytes(charset));
        } catch (IOException ex) {
            Logger.getLogger(Corrector.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
