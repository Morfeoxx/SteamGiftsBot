/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package steamgiftsbot;

import java.io.File;
import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.*;
import org.jsoup.select.*;

/**
 *
 * @author Manos
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {
        File input = new File("index.html");
        Document doc = Jsoup.parse(input, "UTF-8", "http://example.com/");
        Elements posts = doc.select("div.post");
        for(Element post : posts){
            String title = post.select("div.title").select("a[href]").text().toString();
            String timeRemainingString = post.select("div.description").select("div.time_remaining").select("strong").first().text().toString();
            String entriesString = post.select("div.entries").select("a[href]").first().text().toString();
            String giveAwayLink = post.select("div.title").select("a[href]").attr("href").toString();
            String pointsString = post.select("div.title").select("span").last().text().toString();
            if(post.select("div.description").select("div.contributor_only").text().contains("Contributor") ) {System.out.println("AAAAAAAAAAAAAAA");}
            int timeRemaining = convertTimeRemaining(timeRemainingString);
            int entries = convertEntries(entriesString);
            int points = convertPoints(pointsString);

            System.out.println("Title: " + title);
            System.out.println("Points required: " + points);
            System.out.println("Time remaining: " + timeRemaining + " seconds");
            System.out.println("Entries so far: " + entries);
            System.out.println("Link: " + giveAwayLink);
            System.out.println("------------------------------------------------");
        }
    }

    private static int convertTimeRemaining(String time){
        int seconds = 0;
        String[] substrings = time.split(" ");
        if (substrings[1].equals("hours") || substrings[1].equals("hour")){
            seconds = Integer.parseInt(substrings[0]) * 3600;
        }
        if (substrings[1].equals("minutes") || substrings[1].equals("minute")){
            seconds = Integer.parseInt(substrings[0]) * 60;
        }
        if (substrings[1].equals("seconds") || substrings[1].equals("second")){
            seconds = Integer.parseInt(substrings[0]);
        }
        return seconds;
    }
    private static int convertEntries(String entries){
        int entriesInt = 0;
        String[] substrings = entries.split(" ");
        if(substrings[0].contains(",")){
            String[] commas = substrings[0].split(",");
            substrings[0] = "";
            for(int i=0; i<commas.length; i++){
                substrings[0]=substrings[0] + commas[i];
            }
        }
        entriesInt = Integer.parseInt(substrings[0]);
        return entriesInt;
    }
    private static int convertPoints(String points){
        int pointsInt = 0;
        points = points.substring(1);
        String[] p = points.split("P");
        pointsInt = Integer.parseInt(p[0]);
        return pointsInt;
    }

}
