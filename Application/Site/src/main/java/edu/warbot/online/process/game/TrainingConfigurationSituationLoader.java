package edu.warbot.online.process.game;

import edu.warbot.agents.ControllableWarAgent;
import edu.warbot.agents.WarResource;
import edu.warbot.game.InGameTeam;
import edu.warbot.game.WarGame;
import edu.warbot.launcher.WarLauncher;
import edu.warbot.loader.SituationLoader;
import edu.warbot.online.models.TrainingAgent;
import edu.warbot.online.models.TrainingConfiguration;

import java.lang.reflect.InvocationTargetException;
import java.util.Iterator;
import java.util.List;

/**
 * Created by beugnon on 20/06/15.
 * <p/>
 * TrainingConfigurationSituationLoader est une implémentation du SituationLoader
 * relative au site Warbot Online et le stockage de configuration d'entrainement
 * au sein d'une base de données.
 *
 * @author Sébastien BEUGNON
 * @version 1.0
 */
public class TrainingConfigurationSituationLoader implements SituationLoader {


    private TrainingConfiguration trainingConfiguration;

    public TrainingConfigurationSituationLoader(TrainingConfiguration trainingConfiguration) {
        this.trainingConfiguration = trainingConfiguration;
    }

    public TrainingConfiguration getTrainingConfiguration() {
        return trainingConfiguration;
    }


    private void initAgentInFunctionOfTrainingAgent(ControllableWarAgent ca, TrainingAgent ta) {
        ca.setX(ta.getX());
        ca.setY(ta.getY());
        ca.setHeading(ta.getAngle());
        ca.init((int) ta.getLife());
    }

    @Override
    public void launchAllAgentsFromSituation(WarLauncher warLauncher, WarGame warGame) {
        List<InGameTeam> players = warGame.getPlayerTeams();


        Iterator<TrainingAgent> it = getTrainingConfiguration().getTrainingAgents().iterator();
        while (it.hasNext()) {
            try {
                TrainingAgent agent = it.next();
                //TODO CHANGE VALUE TO KNOWN CONSTANTS LIKE 0, 1, 2
                if (agent.getTeamName().equals("red")) {

                    ControllableWarAgent ca =
                            players.get(0).instantiateNewControllableWarAgent(agent.getType().name());
                    initAgentInFunctionOfTrainingAgent(ca, agent);
                    players.get(0).addWarAgent(ca);
                } else if (agent.getTeamName().equals("blue")) {
                    ControllableWarAgent ca =
                            players.get(1).instantiateNewControllableWarAgent(agent.getType().name());
                    initAgentInFunctionOfTrainingAgent(ca, agent);
                    players.get(1).addWarAgent(ca);
                } else {
                    WarResource wr = warGame.getMotherNatureTeam().instantiateNewWarResource(agent.getType().name());
                    wr.setHeading(agent.getAngle());
                    wr.setXY(agent.getX(), agent.getY());
                }

            } catch (InstantiationException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }

        }

    }
}
