let video;

let bodypose;

let conn;
let poses = [];

function preload()
{
    bodypose = ml5.bodyPose("MoveNet", {flipped:true});
    //bodypose = ml5.bodyPose("BlazePose", {flipped:true});
}

function mousePressed()
{
    console.log(poses);
}

function gotpose(results)
{
    poses = results;
}

function setup()
{
    createCanvas(1600,480);
    video = createCapture(VIDEO ,{flipped:true});
    video.hide();

    bodypose.detectStart(video , gotpose);
     conn = bodypose.getSkeleton();
}

function draw()
{
    image(video, 0,0);
    if (poses.length > 0)
    {
        let pose = poses[0];
        let x = pose.nose.x;
        let y = pose.nose.y;

        fill(0,0,255);
        circle(x,y,10);

        for(let i=0; i<pose.keypoints.length;i++)
        {
            let keypoint = pose.keypoints[i];
            
            if(keypoint.confidence > 0.1){
            circle(keypoint.x,keypoint.y,10);}

            for(let j=0;j<conn.length;j++)
            {
                let connection = conn[j];
                let a = connection[0];
                let b = connection[1];
                let keypoint1 = pose.keypoints[a];
                let keypoint2 = pose.keypoints[b];

                let confa = keypoint1.confidence;
                let confb = keypoint2.confidence;
                
                if(confa > 0.1 && confb>0.1){

                stroke(0,255,0);
                strokeWeight(5);
                line(keypoint1.x,keypoint1.y,keypoint2.x,keypoint2.y);

            }}

        }
    }
}
