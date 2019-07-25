# Mancala MVC Java
==================

Read this readme carefully before you start working on the Mancala MVC assignment.


Maven
-----

Use Maven to compile/build/run your project

==> {% link Maven Home https://maven.apache.org/ %}

Guide to installing 3rd party JARs

==> {% link Maven 3rd Party JARs https://maven.apache.org/guides/mini/guide-3rd-party-jars-local.html %}


Using the MancalaAPI project
----------------------------

The MancalaAPI has a dependency on the MancalaDomain so make sure you do the following:

- Implement the Mancala interface (Mancala.java) in your own Mancala Domain project, or
- Use the MancalaDomainForwardInitializationComplete project provided as a JAR

(both can be found in the root of this repo)

### Using the Mancala interface

Copy the Mancala interface into the right package within your domain project and make a class that implements this interface and calls your domein objects for the specified methods. Than run the command below from within your MancalaDomein project to install the MancalaDomain JAR into your local Maven repository so that the MancalaAPI project can find it:

{% codeblock lang:bash %}
  C\>mvn clean install
{% endcodeblock %}
