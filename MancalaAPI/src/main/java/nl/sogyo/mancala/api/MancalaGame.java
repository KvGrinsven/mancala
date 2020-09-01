/**
 * 
 */
package nl.sogyo.mancala.api;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import nl.sogyo.mancala.domain.Mancala;

/**
 * @author rvvugt
 *
 */
@Path("/play")
public class MancalaGame {
	
	// Example call ==> http://localhost/mancala/api/play/3
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{pit}")
	public Response playGet(
			@PathParam("pit") String pit, 
			@Context HttpServletRequest request) {
		
		HttpSession session = request.getSession();
		
		Mancala mancala = (Mancala) session.getAttribute("mancala");
		mancala.playRecess(Integer.parseInt(pit));
		// TODO Do I have to re-set the attribute?
		String output = new JSONResultProcessor().createJSONResponse(mancala);
		
		return Response.status(200).entity(output).build();
	}
	
}
