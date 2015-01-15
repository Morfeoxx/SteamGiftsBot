/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package steamgiftsbot;

import java.io.File;
import java.io.IOException;
import java.util.Random;
import org.jsoup.Jsoup;
import org.jsoup.nodes.*;
import org.jsoup.select.*;
/**
 *
 * @author Manos
 */
public class Options {
    private int minutesToEnter;
    private int entriesToEnter;
    private int minSecsForRand;
    private int maxSecsForRand;

    public Options() throws IOException{
        File input = new File("options.xml");
        Document doc = Jsoup.parse(input, "UTF-8");
        Elements options = doc.select("options");
        this.minutesToEnter = Integer.parseInt(options.select("minutesToEnter").text().toString());
        this.entriesToEnter = Integer.parseInt(options.select("entriesToEnter").text().toString());
        this.minSecsForRand = Integer.parseInt(options.select("minSecsForRand").text().toString());
        this.maxSecsForRand = Integer.parseInt(options.select("maxSecsForRand").text().toString());
    }
    public int getMinutesToEnter(){
        return minutesToEnter;
    }
    public int getEntriesToEnter(){
        return entriesToEnter;
    }
    public int getMinSecsForRand(){
        return minSecsForRand;
    }
    public int getMaxSecsForRand(){
        return maxSecsForRand;
    }
    public int getRandomInterval(){
        int interval = 0;
        Random random = new Random();
        interval = random.nextInt(maxSecsForRand - minSecsForRand) + minSecsForRand;
        return interval;
    }

}
