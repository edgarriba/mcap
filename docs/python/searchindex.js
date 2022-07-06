Search.setIndex({docnames:["apidoc/index","apidoc/mcap","apidoc/mcap.mcap0","apidoc/mcap.mcap0.chunk_builder","apidoc/mcap.mcap0.data_stream","apidoc/mcap.mcap0.exceptions","apidoc/mcap.mcap0.opcode","apidoc/mcap.mcap0.reader","apidoc/mcap.mcap0.records","apidoc/mcap.mcap0.serialization","apidoc/mcap.mcap0.stream_reader","apidoc/mcap.mcap0.summary","apidoc/mcap.mcap0.writer","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["apidoc/index.rst","apidoc/mcap.rst","apidoc/mcap.mcap0.rst","apidoc/mcap.mcap0.chunk_builder.rst","apidoc/mcap.mcap0.data_stream.rst","apidoc/mcap.mcap0.exceptions.rst","apidoc/mcap.mcap0.opcode.rst","apidoc/mcap.mcap0.reader.rst","apidoc/mcap.mcap0.records.rst","apidoc/mcap.mcap0.serialization.rst","apidoc/mcap.mcap0.stream_reader.rst","apidoc/mcap.mcap0.summary.rst","apidoc/mcap.mcap0.writer.rst","index.rst"],objects:{"":[[1,0,0,"-","mcap"]],"mcap.mcap0":[[3,0,0,"-","chunk_builder"],[4,0,0,"-","data_stream"],[5,0,0,"-","exceptions"],[6,0,0,"-","opcode"],[7,0,0,"-","reader"],[8,0,0,"-","records"],[9,0,0,"-","serialization"],[10,0,0,"-","stream_reader"],[11,0,0,"-","summary"],[12,0,0,"-","writer"]],"mcap.mcap0.chunk_builder":[[3,1,1,"","ChunkBuilder"]],"mcap.mcap0.chunk_builder.ChunkBuilder":[[3,2,1,"","add_channel"],[3,2,1,"","add_message"],[3,2,1,"","add_schema"],[3,3,1,"","count"],[3,2,1,"","end"],[3,2,1,"","reset"]],"mcap.mcap0.data_stream":[[4,1,1,"","ReadDataStream"],[4,1,1,"","RecordBuilder"]],"mcap.mcap0.data_stream.ReadDataStream":[[4,3,1,"","count"],[4,2,1,"","read"],[4,2,1,"","read1"],[4,2,1,"","read2"],[4,2,1,"","read4"],[4,2,1,"","read8"],[4,2,1,"","read_prefixed_string"]],"mcap.mcap0.data_stream.RecordBuilder":[[4,3,1,"","count"],[4,2,1,"","end"],[4,2,1,"","finish_record"],[4,2,1,"","start_record"],[4,2,1,"","write"],[4,2,1,"","write1"],[4,2,1,"","write2"],[4,2,1,"","write4"],[4,2,1,"","write8"],[4,2,1,"","write_prefixed_string"]],"mcap.mcap0.exceptions":[[5,4,1,"","EndOfFile"],[5,4,1,"","InvalidMagic"],[5,4,1,"","McapError"]],"mcap.mcap0.opcode":[[6,1,1,"","Opcode"]],"mcap.mcap0.opcode.Opcode":[[6,5,1,"","ATTACHMENT"],[6,5,1,"","ATTACHMENT_INDEX"],[6,5,1,"","CHANNEL"],[6,5,1,"","CHUNK"],[6,5,1,"","CHUNK_INDEX"],[6,5,1,"","DATA_END"],[6,5,1,"","FOOTER"],[6,5,1,"","HEADER"],[6,5,1,"","MESSAGE"],[6,5,1,"","MESSAGE_INDEX"],[6,5,1,"","METADATA"],[6,5,1,"","METADATA_INDEX"],[6,5,1,"","SCHEMA"],[6,5,1,"","STATISTICS"],[6,5,1,"","SUMMARY_OFFSET"]],"mcap.mcap0.reader":[[7,1,1,"","McapReader"],[7,1,1,"","NonSeekingReader"],[7,1,1,"","SeekingReader"],[7,6,1,"","make_reader"]],"mcap.mcap0.reader.McapReader":[[7,2,1,"","get_summary"],[7,2,1,"","iter_attachments"],[7,2,1,"","iter_messages"],[7,2,1,"","iter_metadata"]],"mcap.mcap0.reader.NonSeekingReader":[[7,2,1,"","get_summary"],[7,2,1,"","iter_attachments"],[7,2,1,"","iter_messages"],[7,2,1,"","iter_metadata"]],"mcap.mcap0.reader.SeekingReader":[[7,2,1,"","get_summary"],[7,2,1,"","iter_attachments"],[7,2,1,"","iter_messages"],[7,2,1,"","iter_metadata"]],"mcap.mcap0.records":[[8,1,1,"","Attachment"],[8,1,1,"","AttachmentIndex"],[8,1,1,"","Channel"],[8,1,1,"","Chunk"],[8,1,1,"","ChunkIndex"],[8,1,1,"","DataEnd"],[8,1,1,"","Footer"],[8,1,1,"","Header"],[8,1,1,"","McapRecord"],[8,1,1,"","Message"],[8,1,1,"","MessageIndex"],[8,1,1,"","Metadata"],[8,1,1,"","MetadataIndex"],[8,1,1,"","Schema"],[8,1,1,"","Statistics"],[8,1,1,"","SummaryOffset"]],"mcap.mcap0.records.Attachment":[[8,5,1,"","content_type"],[8,5,1,"","create_time"],[8,5,1,"","data"],[8,5,1,"","log_time"],[8,5,1,"","name"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.AttachmentIndex":[[8,5,1,"","content_type"],[8,5,1,"","create_time"],[8,5,1,"","data_size"],[8,5,1,"","length"],[8,5,1,"","log_time"],[8,5,1,"","name"],[8,5,1,"","offset"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.Channel":[[8,5,1,"","id"],[8,5,1,"","message_encoding"],[8,5,1,"","metadata"],[8,2,1,"","read"],[8,5,1,"","schema_id"],[8,5,1,"","topic"],[8,2,1,"","write"]],"mcap.mcap0.records.Chunk":[[8,5,1,"","compression"],[8,5,1,"","data"],[8,5,1,"","message_end_time"],[8,5,1,"","message_start_time"],[8,2,1,"","read"],[8,5,1,"","uncompressed_crc"],[8,5,1,"","uncompressed_size"],[8,2,1,"","write"]],"mcap.mcap0.records.ChunkIndex":[[8,5,1,"","chunk_length"],[8,5,1,"","chunk_start_offset"],[8,5,1,"","compressed_size"],[8,5,1,"","compression"],[8,5,1,"","message_end_time"],[8,5,1,"","message_index_length"],[8,5,1,"","message_index_offsets"],[8,5,1,"","message_start_time"],[8,2,1,"","read"],[8,5,1,"","uncompressed_size"],[8,2,1,"","write"]],"mcap.mcap0.records.DataEnd":[[8,5,1,"","data_section_crc"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.Footer":[[8,2,1,"","read"],[8,5,1,"","summary_crc"],[8,5,1,"","summary_offset_start"],[8,5,1,"","summary_start"],[8,2,1,"","write"]],"mcap.mcap0.records.Header":[[8,5,1,"","library"],[8,5,1,"","profile"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.McapRecord":[[8,2,1,"","write"]],"mcap.mcap0.records.Message":[[8,5,1,"","channel_id"],[8,5,1,"","data"],[8,5,1,"","log_time"],[8,5,1,"","publish_time"],[8,2,1,"","read"],[8,5,1,"","sequence"],[8,2,1,"","write"]],"mcap.mcap0.records.MessageIndex":[[8,5,1,"","channel_id"],[8,2,1,"","read"],[8,5,1,"","records"],[8,2,1,"","write"]],"mcap.mcap0.records.Metadata":[[8,5,1,"","metadata"],[8,5,1,"","name"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.MetadataIndex":[[8,5,1,"","length"],[8,5,1,"","name"],[8,5,1,"","offset"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.Schema":[[8,5,1,"","data"],[8,5,1,"","encoding"],[8,5,1,"","id"],[8,5,1,"","name"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.Statistics":[[8,5,1,"","attachment_count"],[8,5,1,"","channel_count"],[8,5,1,"","channel_message_counts"],[8,5,1,"","chunk_count"],[8,5,1,"","message_count"],[8,5,1,"","message_end_time"],[8,5,1,"","message_start_time"],[8,5,1,"","metadata_count"],[8,2,1,"","read"],[8,5,1,"","schema_count"],[8,2,1,"","write"]],"mcap.mcap0.records.SummaryOffset":[[8,5,1,"","group_length"],[8,5,1,"","group_opcode"],[8,5,1,"","group_start"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.serialization":[[9,6,1,"","normalize_value"],[9,6,1,"","stringify_record"]],"mcap.mcap0.stream_reader":[[10,1,1,"","StreamReader"]],"mcap.mcap0.stream_reader.StreamReader":[[10,3,1,"","records"]],"mcap.mcap0.summary":[[11,1,1,"","Summary"]],"mcap.mcap0.writer":[[12,1,1,"","CompressionType"],[12,1,1,"","IndexType"],[12,1,1,"","Writer"]],"mcap.mcap0.writer.CompressionType":[[12,5,1,"","LZ4"],[12,5,1,"","NONE"],[12,5,1,"","ZSTD"]],"mcap.mcap0.writer.IndexType":[[12,5,1,"","ALL"],[12,5,1,"","ATTACHMENT"],[12,5,1,"","CHUNK"],[12,5,1,"","MESSAGE"],[12,5,1,"","METADATA"],[12,5,1,"","NONE"]],"mcap.mcap0.writer.Writer":[[12,2,1,"","add_attachment"],[12,2,1,"","add_message"],[12,2,1,"","add_metadata"],[12,2,1,"","finish"],[12,2,1,"","register_channel"],[12,2,1,"","register_schema"],[12,2,1,"","start"]],mcap:[[2,0,0,"-","mcap0"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:exception","5":"py:attribute","6":"py:function"},terms:{"0":12,"1":[6,12],"10":6,"1048576":12,"11":6,"12":6,"13":6,"14":6,"15":6,"16":12,"2":[6,12],"3":[6,12],"30":12,"4":[6,12],"5":6,"6":6,"7":6,"8":[6,12,13],"9":6,"abstract":7,"byte":[4,7,8,9,10,12],"class":[3,4,6,7,8,10,11,12,13],"enum":[6,12],"final":12,"import":13,"int":[4,7,8,9,12],"new":12,"return":[7,10,12],"static":8,"true":12,A:12,If:12,The:[12,13],_io:[10,12],abc:7,about:12,accord:12,ad:12,add:12,add_attach:12,add_channel:3,add_messag:[3,12,13],add_metadata:12,add_schema:3,after:7,all:12,an:[6,7,10,12],ani:[9,12],ar:7,argument:13,assign:12,associ:12,attach:[6,7,8,12],attachment_count:8,attachment_index:6,attachmentindex:8,avail:12,base:[3,4,5,6,7,8,10,11,12],befor:7,bool:[10,12],bufferedread:10,bufferedwrit:12,bytesio:10,channel:[3,6,7,8,12,13],channel_count:8,channel_id:[8,12,13],channel_message_count:8,chunk:[6,8,12],chunk_build:[1,2],chunk_count:8,chunk_index:6,chunk_length:8,chunk_siz:12,chunk_start_offset:8,chunkbuild:3,chunkindex:8,close:[12,13],compress:[8,12],compressed_s:8,compressiontyp:12,conform:12,contain:7,content:[0,7],content_typ:[8,12],count:[3,4],counter:12,creat:12,create_tim:[8,12],current:12,custom:[12,13],data:[4,7,8,10,12,13],data_end:6,data_s:8,data_section_crc:8,data_stream:[1,2,8],dataend:8,debug:12,decod:12,diagnost:13,dict:[8,9,12],doe:12,dump:13,e:12,emit_chunk:10,empti:12,enabl:12,encod:[8,12,13],encount:10,end:[3,4],end_tim:7,endoffil:5,enumer:[6,12],etc:12,except:[1,2],f:13,fals:10,field:12,file:[12,13],finish:[12,13],finish_record:4,flag:12,footer:[6,8],form:12,format:[12,13],free:12,from:[7,10,13],g:12,get_summari:7,group_length:8,group_opcod:8,group_start:8,header:[6,8],help:13,high:7,id:[8,12],identifi:[12,13],includ:7,index:[12,13],index_typ:12,indextyp:12,indic:12,inform:12,input:10,integ:[7,12],intenum:6,invalidmag:5,io:[4,7,10,12],iter:[7,10],iter_attach:7,iter_messag:[7,13],iter_metadata:7,its:12,jpg:12,json:13,jsonschema:13,kei:12,known:12,length:[4,8,12],level:7,librari:[8,12],list:8,log:[7,12],log_tim:[8,12,13],lz4:12,make_read:[7,13],mcap0:[0,1,13],mcaperror:5,mcapread:7,mcaprecord:[8,9,10],messag:[3,6,7,8,12,13],message_count:8,message_encod:[8,12,13],message_end_tim:8,message_index:6,message_index_length:8,message_index_offset:8,message_start_tim:8,messageindex:8,metadata:[6,7,8,12],metadata_count:8,metadata_index:6,metadataindex:8,mime:12,modul:[0,13],must:12,my:13,name:[8,12,13],nanosecond:7,none:[7,8,12],nonseekingread:7,normalize_valu:9,note:12,numer:12,object:[3,4,7,8,10,11,12,13],offset:8,one:12,onli:7,opcod:[1,2,4],open:13,option:[7,12],order:10,other:12,out:7,output:12,packag:[0,13],page:13,param:7,paramet:[7,12],plain:12,prefix:12,print:13,profil:[8,12,13],properti:[3,4,10,13],provid:[7,13],publish:12,publish_tim:[8,12,13],rawiobas:10,rb:13,read1:4,read2:4,read4:4,read8:4,read:[4,7,8,10,13],read_prefixed_str:4,readdatastream:[4,8],reader:[1,2],record:[1,2,3,7,9,10,12],recordbuild:[4,8],regist:12,register_channel:[12,13],register_schema:[12,13],repeat_channel:12,repeat_schema:12,requir:12,reset:3,sampl:13,sample_top:13,scene1:12,schema:[3,6,7,8,12,13],schema_count:8,schema_id:[8,12,13],search:13,section:7,seekabl:7,seekingread:7,sequenc:[8,12],sequenti:10,serial:[1,2],set:12,should:12,skip_mag:10,sourc:[3,4,5,6,7,8,9,10,11,12],specifi:12,start:[12,13],start_record:4,start_tim:7,statist:[6,8],str:[4,7,8,9,10,12],stream:[4,7,8,10,12,13],stream_read:[1,2],streamread:10,string:[12,13],stringify_record:9,submodul:[0,1],subpackag:0,summari:[1,2,7,12],summary_crc:8,summary_offset:6,summary_offset_start:8,summary_start:8,summaryoffset:8,test:13,text:12,thi:[7,12,13],through:7,throughout:12,time:[12,13],time_n:13,timestamp:7,tool:13,topic:[7,8,12,13],tupl:[7,8],type:[12,13],uncompressed_crc:8,uncompressed_s:8,underli:12,union:[9,10,12],us:12,use_chunk:12,use_statist:12,use_summary_offset:12,user_data:12,utf:13,v1:13,valu:[4,6,9,12],version:12,wa:12,wb:13,well:12,what:13,which:12,write1:4,write2:4,write4:4,write8:4,write:[4,8,12,13],write_prefixed_str:4,writer:[1,2],wrote:13,x:[12,13],zero:12,zstd:12},titles:["mcap","mcap package","mcap.mcap0 package","mcap.mcap0.chunk_builder module","mcap.mcap0.data_stream module","mcap.mcap0.exceptions module","mcap.mcap0.opcode module","mcap.mcap0.reader module","mcap.mcap0.records module","mcap.mcap0.serialization module","mcap.mcap0.stream_reader module","mcap.mcap0.summary module","mcap.mcap0.writer module","MCAP Python Library"],titleterms:{chunk_build:3,content:[1,2,13],data_stream:4,exampl:13,except:5,indic:13,librari:13,mcap0:[2,3,4,5,6,7,8,9,10,11,12],mcap:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],modul:[1,2,3,4,5,6,7,8,9,10,11,12],opcod:6,packag:[1,2],python:13,reader:[7,13],record:8,serial:9,stream_read:10,submodul:2,subpackag:1,summari:11,tabl:13,writer:[12,13]}})