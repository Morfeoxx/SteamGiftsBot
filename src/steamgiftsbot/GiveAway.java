/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package steamgiftsbot;

/**
 *
 * @author Manos
 */
public class GiveAway {
    private boolean contributorOnly;
    private String title;
    private String link;
    private int entries;
    private int timeRemaining;
    private int pointsRequired;

    public GiveAway(boolean contributorOnly, String title, String link, int entries, int timeRemaining, int pointsRequired){
        this.contributorOnly = contributorOnly;
        this.title = title;
        this.link = link;
        this.entries = entries;
        this.timeRemaining = timeRemaining;
        this.pointsRequired = pointsRequired;
    }

    public boolean getContributorOnly(){
        return contributorOnly;
    }
    public String getTitle(){
        return title;
    }
    public String getLink(){
        return link;
    }
    public int getEntries(){
        return entries;
    }
    public int getTimeRemaining(){
        return timeRemaining;
    }
    public int getPointsRequired(){
        return pointsRequired;
    }
}
