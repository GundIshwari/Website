import './Team.css'
import img1 from "../images/Ish.jpeg";
import img2 from "../images/pra.jpeg";
import img3 from "../images/vais.jpeg";
import img4 from "../images/shubh.jpeg";
const Team = () => {
    return(
        <>
        	<section class="section-team">
		<div class="container">
			
			<div class="row justify-content-center text-center">
				<div class="col-md-8 col-lg-6">
					<div class="header-section">
						<h3 class="small-title">Our Experts</h3>
						<h2 class="title">Let's meet with our team members</h2>
					</div>
				</div>
			</div>
			
			<div class="row">
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
						<img src={img1} class="card-img-top" alt=" "/>
							
						</div>
						<div class="person-info">
							<h3 class="full-name">Ishwari Gund</h3>
							
						</div>
					</div>
				</div>
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
						<img src={img2} class="card-img-top" alt=" "/>
						</div>
						<div class="person-info">
							<h3 class="full-name">Pratiksha Sabale</h3>
							
						</div>
					</div>
				</div>
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
						<img src={img3} class="card-img-top" alt=" "/>
							
								
						</div>
						<div class="person-info">
							<h3 class="full-name">Vaishnavi Auti</h3>
							
						</div>
					</div>
				</div>
				
				<div class="col-sm-6 col-lg-4 col-xl-3">
					<div class="single-person">
						<div class="person-image">
						<img src={img4} class="card-img-top" alt=" "/>
							</div>
						<div class="person-info">
							<h3 class="full-name">Shubhangi Futane</h3>
							
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
        </>
    )
}
export default Team;



