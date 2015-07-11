#!/usr/bin/env ruby
# encoding: utf-8
# @author Falindir

arg       = "-min"
extFile   = ".js" 
compiled  = "-compiled"
root      = "./"
read      = "r"
write     = "w"
back      = "\n"
arg1      = ARGV[0]
dir       = Dir.new('.')
dirname   = File.basename(Dir.getwd)
minFile   = false
myFile    = dirname + compiled + extFile
myFileMin = dirname + compiled + arg + extFile
dest      = myFile
tab       = "\t"

if arg == arg1
	minFile = true
	dest = myFileMin
end



File.open(dest, write) do |dst| 

  dir.each do |file|

    if File.extname(file) == extFile && file != myFile && file != myFileMin

      fileName = root + file
      currentFile = File.open(fileName, read)

      currentFile.each_line do |line|

      	if minFile
			c   = line.sub("\n", '')
			cc  = c.sub("\t", '')
			ccc = cc.gsub("  ",'')
			cccc = ccc.sub("\r\n", '')
        	dst.write(ccc)
       	else
       		dst.write(line) 	
      	end
      end	
      currentFile.close

      if !minFile
      	dst.write("\n\n")
      end	
    end  

  end  

end