package jp.ac.oit.igakilab.tctr.project;

import java.util.List;

public class projectManager {
String id;
String name;
String owner;
String overview;
String state;
List<String> projectId;

public String getId() {
return id;
}
public void setId(String id) {
this.id = id;
}
public String getName() {
return name;
}
public void setName(String name) {
this.name = name;
}
public String getOwner() {
return owner;
}
public void setOwner(String owner) {
this.owner = owner;
}
public List<String> getprojectId() {
return projectId;
}
public void setprojectId(String projectId) {
this.projectId.add(projectId);
}
public String getOverview() {
return overview;
}
public void setOverview(String overview) {
this.overview = overview;
}
public String getState() {
return state;
}
public void setState(String state) {
this.state = state;
}


}